# 单课页面生产规范

所有课页必须逐字套用本文的骨架与类名。样式表 `assets/style.css` 已经包含
全部需要的类，**不要新增 CSS，不要改动 `assets/` 下任何文件，不要动 `index.html`**。

参考实现（必读，写之前先打开看一遍）：`lessons/lesson-01.html`

---

## 1. 页面骨架（照抄，只替换注释处）

```html
<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Lesson NN · 课文标题 — Talk Talk Talk 1</title>
<meta name="description" content="Talk Talk Talk 1 / Lesson NN 预习页：……（30–60字中文，说明本课练什么）">
<link rel="stylesheet" href="../assets/style.css">
</head>
<body data-lesson="NN" data-root="../">

<div id="sidebar"></div>
<div id="sidebar-overlay"></div>

<div class="page">

<header class="topbar">
  <div class="wrap">
    <button class="side-toggle" id="sidebar-toggle" type="button" aria-label="打开课文目录" aria-controls="sidebar" aria-expanded="false">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
    </button>
    <a class="brand" href="../index.html">Talk <span>Talk</span> Talk 1</a>
  </div>
</header>

<main class="wrap" id="content">

  <div class="hero">
    <p class="kicker">Part X · 该 Part 名称</p>
    <p class="lesson-no">Lesson NN</p>
    <h1>课文标题（英文，保留课本原样，含弯引号）</h1>
    <p class="lede">两三句中文，说清本课的训练目标，以及最容易卡住的地方。可以用 &lt;strong&gt; 强调关键词。</p>
    <ul class="chips">
      <li>课本 p.XX–XX</li>
      <li>N 个条目</li>
    </ul>
  </div>

  <!-- 各 section 见第 4 节 -->

</main>

<footer>
  <div class="wrap">
    <p>Talk Talk Talk 1 · Lesson NN 预习页 · 课本 p.XX–XX · <a href="../index.html">返回目录</a></p>
  </div>
</footer>

</div><!-- /.page -->

<script src="../assets/data.js"></script>
<script src="../assets/site.js"></script>

</body>
</html>
```

`data-lesson` 必须是本课课号（数字，不加引号也行但请加），侧边栏靠它定位当前课。

---

## 2. 可用类名清单（只能用这些）

- 区块：`<section id="…">` + `<h2><span class="num">0N</span>中文标题</h2>` + `<p class="section-note">一句说明</p>`
  - `.num` 按顺序 01、02、03……不可重复或跳号
- 三步骨架：`<ol class="frame-steps"><li><b>英文小标题</b><span class="say"><em lang="en">示例句</em></span></li></ol>`
  - `li` 自带圆形序号
- 规律表：`<table class="grammar">` + `thead(th)` + `tbody(td)`
- 图片卡片：`<ul class="signs">` + `<li class="sign">`
  - 内部结构：`<figure class="sign-plate"><span class="sign-no">编号</span><img src="../img/lNN/01.jpg" alt="英文描述" loading="lazy"></figure>` + `<div class="sign-body">…</div>`
  - 无图时**省略整个 `<figure>`**，直接放 `<div class="sign-body">`
  - 卡片标题：`<h3 class="sign-name">English <span class="ipa">/phonetics/</span></h3>`
  - 三行说明：`<p class="row see"><span class="lab">英文标签</span>英文内容</p>`，`row see` / `row mean` / `row say` 三种
  - `row say` 里用 `<em lang="en">整段口语答案</em>`（自动加引号）
- 提示框：`<div class="callout">` 或 `<div class="callout warn">`（内部首行 `<strong>标题。</strong>`）
- 词汇表：`<div class="vocab-scroll"><table class="vocab">` + `thead(th 三次)` + `tbody`
  - 四列：`<td class="w">word</td>`、`<td class="ipa">/…/</td>`、`<td>课上怎么用（英文搭配 + 可加 <span class="note">中文提示</span>）</td>`、`<td class="zh">中文</td>`
  - 注意 `.note` 只用于 `class="ipa"`、`class="w"`、`class="zh"` 之外的普通 td 内，也可用在第二列
- 问答：`<div class="qa"><details><summary>老师的问题</summary><div class="answer"><p>英文答案</p></div><p class="why">中文说明为什么这么答</p></details></div>`
  - 第一条加 `open` 属性
- 纠错：`<ul class="fix"><li><span class="x">✗</span><del>错句</del><br><span class="o">✓</span><ins lang="en">对句</ins><span class="note">中文解释</span></li></ul>`

---

## 3. 内容质量标准

面向的学生：25 岁在读研究生，四六级已过，**读得懂但说不出口**。所以：

- 音标一律**美式**（General American），用 `/…/` 包裹
- 所有口语答案写成**可以直接念出口的完整句子**，不要写「可以参考……」
- 讲解用中文，示例和答案用英文（`lang="en"` 或 `em`）
- 词汇表第三列必须是**课上真正会用的搭配或句型**，不是词典释义
- 禁止编造课本里没有的内容；课本原文英文要准确照抄
- 每课体量参考 Lesson 1：词汇 18–26 条、问答 5–7 条、纠错 5–8 条

---

## 4. 各 Part 的结构差异

### Part I（Lesson 2–4）：看图说标志 / 物品
区块顺序：`frame`（回答骨架）→ `pattern`（形状或物体的规律）→ `example`（课本例题）→ `items`（逐个）→ `vocab` → `qa` → `fix` → `plan`

### Part II（Lesson 5–16）：日常问题 + 配图
区块顺序：`frame` → `pattern`（这一疑问词的回答套路）→ `items` → `vocab` → `qa` → `fix` → `plan`

`items` 每张卡片：
- `What you see`（照着图说话）
- `What it means`（本课问题在问什么）
- `Say it like this`（**两三个档次的答案**：一句短答 / 两句展开 / 加一个具体例子）

卡片标题用课本上的**问题原文**（如 `Do you like raw fish?`），音标可省。

### Part III（Lesson 17–23）：给陈述 → 造问题
区块顺序：`frame`（陈述句翻译成疑问句的规则）→ `pattern`（疑问词 + 助动词 + 主语的配方表）→ `items` → `vocab` → `qa` → `fix` → `plan`

`items` 每张卡片：
- `The statement`（课本给的句子）
- `Questions to ask`（课本给的两个问句，用 `<br>` 或短列表）
- `Say it like this`（再补 2–3 个同类问句，让学员会举一反三）

### Part IV（Lesson 24–30）：看插图 → 描述 → 表态
区块顺序：`frame`（观察→描述→立场的三步）→ `items` → `vocab` → `qa` → `fix` → `plan`

`items` 每张卡片：
- `What you see`（细节尽可能多：人物、动作、异常之处）
- `What's wrong / What it means`（问题核心）
- `Say it like this`（完整的口语回答，含立场和理由）

---

## 5. 配图处理

页面图已渲染于 `~/talk/pages-all/pNNN.png`（NNN = PDF 页码，130 dpi）。

1. 先 `Read` 页面图，看清布局
2. 用工具查框：`~/talk/.venv/bin/python ~/talk-english/tools/extract.py detect --page NNN`
3. 裁图：`… extract.py crop --page NNN --box x0,y0,x1,y1 --out img/lNN/01.jpg`
   （坐标用 detect 输出的 200dpi 坐标，直接粘）
4. **必须 Read 裁出来的 jpg 验证**：不能切边、不能带进无关元素；不对就调 box 重裁
5. 全部裁完后清理误产物，确认 `img/lNN/` 里只有实际用到的图

图片规格：JPEG，长边 ≤460px（工具默认就是这么存的），文件名 `01.jpg`、`02.jpg`……

---

## 6. 交付物

1. `lessons/lesson-NN.html`
2. `img/lNN/*.jpg`
3. `_sections/lesson-NN.json` —— 供合并进侧边栏，格式严格如下：

```json
{"no": 5, "sections": [{"id": "frame", "t": "回答骨架"}, {"id": "pattern", "t": "喜欢的三种答法"}]}
```

`id` 必须与 HTML 里 `<section id="…">` 完全一致，`t` 是侧边栏显示的中文短标签（≤10 字）。
