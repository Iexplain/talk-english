#!/usr/bin/env python3
"""Helpers for pulling page images and illustrations out of the scanned
Talk Talk Talk 1 PDF.

The PDF has no usable text layer (it's a scan whose OCR is garbage), so
every lesson has to be *looked at*. This script does the mechanical part:
render pages to PNG, find illustration blocks, crop and shrink them.

Usage
-----
  render   --from 9 --to 157 --dpi 130 --out DIR
  detect   --page 27 --dpi 200
  crop     --page 27 --box 120,300,520,760 --out img/l05/01.jpg
  autosplit --page 27 --out img/l05 --max 420

`--page` is the PDF page number (1-based). The book's printed page number
is PDF page plus 3 (PDF p.7 == printed p.10).
"""

import argparse
import os
import sys
from collections import deque

import numpy as np
import pymupdf
from PIL import Image, ImageChops, ImageFilter

PDF = os.environ.get("TALK_PDF", "/home/liuyalu/talk/Talk Talk Talk 1.pdf")
INK = 235          # grey level below which a pixel counts as content
DILATE = 17        # px of dilation at 200 dpi: bridges gaps inside one drawing


def open_pdf():
    return pymupdf.open(PDF)


def render_page(doc, page_no, dpi):
    """PDF page number (1-based) -> PIL RGB image."""
    pix = doc[page_no - 1].get_pixmap(dpi=dpi)
    return Image.frombytes("RGB", (pix.width, pix.height), pix.samples)


def find_blocks(img, min_area=0.004, max_area=0.60, min_side=90, dilate=DILATE):
    """Connected components of non-white pixels, filtered to illustration-sized
    blobs. Returns [(x0, y0, x1, y1, area_fraction, w, h)] in image pixels."""
    grey = np.array(img.convert("L"))
    mask = ((grey < INK) * 255).astype(np.uint8)
    mask = np.array(Image.fromarray(mask).filter(ImageFilter.MaxFilter(dilate)))
    H, W = mask.shape
    seen = np.zeros_like(mask, dtype=bool)
    ys, xs = np.nonzero(mask)
    out = []
    for y, x in zip(ys.tolist(), xs.tolist()):
        if seen[y, x]:
            continue
        q = deque([(y, x)])
        seen[y, x] = True
        y0 = y1 = y
        x0 = x1 = x
        n = 0
        while q:
            cy, cx = q.popleft()
            n += 1
            if cy < y0: y0 = cy
            if cy > y1: y1 = cy
            if cx < x0: x0 = cx
            if cx > x1: x1 = cx
            for dy in (-1, 0, 1):
                for dx in (-1, 0, 1):
                    ny, nx = cy + dy, cx + dx
                    if 0 <= ny < H and 0 <= nx < W and mask[ny, nx] and not seen[ny, nx]:
                        seen[ny, nx] = True
                        q.append((ny, nx))
        ar = n / float(H * W)
        w, h = x1 - x0, y1 - y0
        if min_area < ar < max_area and w > min_side and h > min_side:
            if w / float(h) < 6 and h / float(w) < 6:   # skip long text lines
                out.append((x0, y0, x1, y1, round(ar, 4), w, h))
    out.sort(key=lambda t: (t[1] // 120, t[0]))
    return out


def trim(img, pad=8):
    bg = Image.new("RGB", img.size, (255, 255, 255))
    diff = ImageChops.difference(img.convert("RGB"), bg).convert("L")
    diff = diff.point(lambda v: 255 if v > 18 else 0)
    bb = diff.getbbox()
    if not bb:
        return img
    return img.crop((max(bb[0] - pad, 0), max(bb[1] - pad, 0),
                     min(bb[2] + pad, img.width), min(bb[3] + pad, img.height)))


def save_shrunk(img, path, max_side):
    """Save as a compressed JPEG capped at max_side px on the long edge."""
    w, h = img.size
    scale = min(1.0, max_side / float(max(w, h)))
    if scale < 1.0:
        img = img.resize((max(1, int(w * scale)), max(1, int(h * scale))), Image.LANCZOS)
    os.makedirs(os.path.dirname(os.path.abspath(path)), exist_ok=True)
    img.convert("RGB").save(path, "JPEG", quality=80, optimize=True, progressive=True)
    return img.size


def cmd_render(a):
    doc = open_pdf()
    os.makedirs(a.out, exist_ok=True)
    for p in range(a.from_, a.to + 1):
        path = os.path.join(a.out, "p%03d.png" % p)
        if os.path.exists(path) and not a.force:
            continue
        render_page(doc, p, a.dpi).save(path)
        print("rendered", path)


def cmd_detect(a):
    doc = open_pdf()
    img = render_page(doc, a.page, a.dpi)
    print("# page %d (%dx%d @ %d dpi)  book p.%d" % (a.page, img.width, img.height, a.dpi, a.page + 3))
    for b in find_blocks(img, min_area=a.min_area):
        print("  box %4d,%4d,%4d,%4d   area=%.3f  %dx%d" % b)


def cmd_crop(a):
    doc = open_pdf()
    x0, y0, x1, y1 = (int(v) for v in a.box.split(","))
    probe = render_page(doc, a.page, a.dpi)
    sx = probe.width / float(doc[a.page - 1].rect.width)
    # box coordinates are given at --box-dpi scale (default 200)
    k = probe.width / float(render_page(doc, a.page, 200).width)
    box = (x0 * k, y0 * k, x1 * k, y1 * k)
    full = render_page(doc, a.page, a.dpi)
    kk = full.width / float(probe.width)
    crop = full.crop(tuple(int(v * kk) for v in box))
    if a.no_trim is False:
        crop = trim(crop)
    print("saved", a.out, save_shrunk(crop, a.out, a.max))


def cmd_autosplit(a):
    doc = open_pdf()
    probe = render_page(doc, a.page, 200)
    blocks = find_blocks(probe, min_area=a.min_area)
    if not blocks:
        print("no blocks found on page", a.page)
        return
    full = render_page(doc, a.page, a.dpi)
    k = full.width / float(probe.width)
    n = 0
    for (x0, y0, x1, y1, ar, w, h) in blocks:
        n += 1
        crop = full.crop((int(x0 * k), int(y0 * k), int(x1 * k), int(y1 * k)))
        crop = trim(crop)
        out = os.path.join(a.out, "%02d.jpg" % n)
        size = save_shrunk(crop, out, a.max)
        print("  %s  %dx%d  (block %d,%d,%d,%d area=%.3f)" % (out, size[0], size[1], x0, y0, x1, y1, ar))
    print("wrote %d images to %s" % (n, a.out))


def main():
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = ap.add_subparsers(dest="cmd", required=True)

    r = sub.add_parser("render", help="render whole pages to PNG")
    r.add_argument("--from", dest="from_", type=int, required=True)
    r.add_argument("--to", type=int, required=True)
    r.add_argument("--dpi", type=int, default=130)
    r.add_argument("--out", required=True)
    r.add_argument("--force", action="store_true")
    r.set_defaults(func=cmd_render)

    d = sub.add_parser("detect", help="list illustration blocks on a page")
    d.add_argument("--page", type=int, required=True)
    d.add_argument("--dpi", type=int, default=200)
    d.add_argument("--min-area", type=float, default=0.004)
    d.set_defaults(func=cmd_detect)

    c = sub.add_parser("crop", help="crop one box (coords at 200 dpi) to a JPEG")
    c.add_argument("--page", type=int, required=True)
    c.add_argument("--box", required=True, help="x0,y0,x1,y1 in 200-dpi pixels")
    c.add_argument("--out", required=True)
    c.add_argument("--dpi", type=int, default=300)
    c.add_argument("--max", type=int, default=460)
    c.add_argument("--no-trim", action="store_true")
    c.set_defaults(func=cmd_crop)

    s = sub.add_parser("autosplit", help="crop every detected block on a page")
    s.add_argument("--page", type=int, required=True)
    s.add_argument("--out", required=True)
    s.add_argument("--dpi", type=int, default=300)
    s.add_argument("--max", type=int, default=460)
    s.add_argument("--min-area", type=float, default=0.004)
    s.set_defaults(func=cmd_autosplit)

    a = ap.parse_args()
    a.func(a)


if __name__ == "__main__":
    main()
