/* Talk Talk Talk 1 — sidebar navigation.
   Renders the persistent lesson sidebar from assets/data.js on every page.

   Expectations from the page:
     <body data-lesson="1">          current lesson number (0 or omitted = hub page)
     <body data-root="../">          prefix that reaches the repo root, e.g. "" or "../"
     <div id="sidebar"></div>        mount point
     <main id="content">             the page's own content
*/
(function () {
  'use strict';

  var D = window.TALK_DATA;
  if (!D) return;

  var body = document.body;
  var root = body.getAttribute('data-root') || '';
  var current = parseInt(body.getAttribute('data-lesson') || '0', 10);

  var mount = document.getElementById('sidebar');
  var content = document.getElementById('content');
  if (!mount) return;

  /* ---------- build markup ---------- */

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  var lessonsByPart = {};
  D.lessons.forEach(function (l) {
    (lessonsByPart[l.part] = lessonsByPart[l.part] || []).push(l);
  });

  var html = [];
  html.push('<div class="side-head">');
  html.push('<a class="side-brand" href="' + root + 'index.html">Talk <span>Talk</span> Talk 1</a>');
  html.push('<button class="side-close" type="button" aria-label="关闭目录">&times;</button>');
  html.push('</div>');

  html.push('<div class="side-search">');
  html.push('<input type="search" id="lesson-filter" placeholder="搜索课号或标题…" autocomplete="off" spellcheck="false" aria-label="搜索课文">');
  html.push('</div>');

  html.push('<nav class="side-nav" aria-label="课文目录">');

  D.parts.forEach(function (p) {
    var items = lessonsByPart[p.id] || [];
    var hasCurrent = items.some(function (l) { return l.no === current; });

    html.push('<section class="side-part' + (hasCurrent ? ' is-open' : '') + '">');
    html.push('<button class="side-part-btn" type="button" aria-expanded="' + (hasCurrent ? 'true' : 'false') + '">');
    html.push('<span class="side-part-name">' + esc(p.name) + '</span>');
    html.push('<span class="side-part-meta">' + esc(p.desc) + ' · ' + items.length + '</span>');
    html.push('<span class="side-caret" aria-hidden="true"></span>');
    html.push('</button>');

    html.push('<ul class="side-lessons">');
    items.forEach(function (l) {
      var isCur = l.no === current;
      html.push('<li class="side-item' + (isCur ? ' is-current' : '') + (l.ready ? '' : ' is-soon') + '">');

      var label = '<span class="side-no">' + (l.no < 10 ? '0' + l.no : l.no) + '</span>' +
                  '<span class="side-title">' + esc(l.title) + '</span>';

      if (l.ready) {
        html.push('<a class="side-link" href="' + root + l.href + '">' + label + '</a>');
      } else {
        html.push('<span class="side-link is-disabled" aria-disabled="true">' + label +
                  '<span class="side-soon">待发布</span></span>');
      }

      if (isCur && l.sections && l.sections.length) {
        html.push('<ul class="side-sections">');
        l.sections.forEach(function (s) {
          html.push('<li><a href="#' + esc(s.id) + '">' + esc(s.t) + '</a></li>');
        });
        html.push('</ul>');
      }

      html.push('</li>');
    });
    html.push('</ul>');
    html.push('</section>');
  });

  html.push('</nav>');

  /* prev / next */
  var idx = -1;
  for (var i = 0; i < D.lessons.length; i++) {
    if (D.lessons[i].no === current) { idx = i; break; }
  }
  if (idx > -1) {
    var prev = D.lessons[idx - 1];
    var next = D.lessons[idx + 1];
    html.push('<div class="side-pager">');
    if (prev && prev.ready) {
      html.push('<a href="' + root + prev.href + '"><span>上一课</span>' + esc(prev.title) + '</a>');
    } else {
      html.push('<span class="is-off"><span>' + (prev ? '上一课' : '已经是第一课') + '</span>' +
                (prev ? esc(prev.title) : '') + '</span>');
    }
    if (next && next.ready) {
      html.push('<a class="is-next" href="' + root + next.href + '"><span>下一课</span>' + esc(next.title) + '</a>');
    } else {
      html.push('<span class="is-off is-next"><span>' + (next ? '下一课' : '已经是最后一课') + '</span>' +
                (next ? esc(next.title) + ' <em>待发布</em>' : '') + '</span>');
    }
    html.push('</div>');
  }

  mount.innerHTML = html.join('');

  /* ---------- behaviour ---------- */

  var partButtons = mount.querySelectorAll('.side-part-btn');
  Array.prototype.forEach.call(partButtons, function (btn) {
    btn.addEventListener('click', function () {
      var sec = btn.parentNode;
      var open = sec.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });

  /* search filter */
  var filter = document.getElementById('lesson-filter');
  if (filter) {
    filter.addEventListener('input', function () {
      var q = filter.value.trim().toLowerCase();
      var sections = mount.querySelectorAll('.side-part');
      Array.prototype.forEach.call(sections, function (sec) {
        var shown = 0;
        Array.prototype.forEach.call(sec.querySelectorAll('.side-item'), function (li) {
          var text = (li.textContent || '').toLowerCase();
          var hit = !q || text.indexOf(q) > -1;
          li.hidden = !hit;
          if (hit) shown++;
        });
        sec.hidden = shown === 0;
        if (q && shown > 0) sec.classList.add('is-open');
      });
    });
  }

  /* mobile drawer */
  var toggle = document.getElementById('sidebar-toggle');
  var overlay = document.getElementById('sidebar-overlay');
  var closeBtn = mount.querySelector('.side-close');

  function setDrawer(open) {
    document.documentElement.classList.toggle('drawer-open', open);
    if (toggle) toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.style.overflow = open ? 'hidden' : '';
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      setDrawer(!document.documentElement.classList.contains('drawer-open'));
    });
  }
  if (overlay) overlay.addEventListener('click', function () { setDrawer(false); });
  if (closeBtn) closeBtn.addEventListener('click', function () { setDrawer(false); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setDrawer(false);
  });

  /* clicking a link inside the drawer closes it */
  Array.prototype.forEach.call(mount.querySelectorAll('a'), function (a) {
    a.addEventListener('click', function () { setDrawer(false); });
  });

  /* keep the current item visible in the sidebar */
  var curEl = mount.querySelector('.side-item.is-current');
  if (curEl && curEl.scrollIntoView) {
    var nav = mount.querySelector('.side-nav');
    if (nav) {
      var top = curEl.offsetTop - nav.clientHeight / 2 + curEl.offsetHeight / 2;
      nav.scrollTop = Math.max(0, top);
    }
  }

  /* highlight the section you're reading (lesson pages only) */
  var sectionLinks = mount.querySelectorAll('.side-sections a');
  if (sectionLinks.length && 'IntersectionObserver' in window) {
    var map = {};
    Array.prototype.forEach.call(sectionLinks, function (a) {
      map[a.getAttribute('href').slice(1)] = a;
    });
    var visible = {};
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        visible[e.target.id] = e.isIntersecting ? e.intersectionRatio : 0;
      });
      var bestId = null, best = 0;
      for (var id in visible) {
        if (visible[id] > best) { best = visible[id]; bestId = id; }
      }
      Array.prototype.forEach.call(sectionLinks, function (a) {
        a.classList.toggle('is-active', a.getAttribute('href').slice(1) === bestId);
      });
    }, { rootMargin: '-15% 0px -70% 0px', threshold: [0, 0.25, 0.5, 1] });

    Object.keys(map).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) io.observe(el);
    });
  }
})();
