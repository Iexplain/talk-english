# talk-english

《New Talk Talk Talk 1》30 课逐课预习材料，静态网页版。

## 内容

每课一页，包含：

- **回答骨架** —— 把口语输出拆成固定三段式，避免冷场
- **图片词汇** —— 课本图里画的到底是什么、用英语口语怎么描述（不是背词典释义）
- **重点词汇** —— 美式 IPA 音标 + 课上实际会用的搭配
- **老师会问的问题** —— 含参考答案和句型提示
- **常见错误** —— 中式翻译到地道说法的对照
- **时间分配建议** —— 课前 20 分钟怎么过

## 目录结构

```
index.html              总目录（30 课）
lessons/lesson-NN.html  每课一页，01–30
assets/data.js          课程数据，侧边栏和上一课/下一课都由它生成
assets/site.js          侧边栏渲染、搜索、阅读位置高亮
assets/style.css        全站共享样式（跟随系统深色模式、支持打印）
img/lNN/                从课本裁出的配图（00 为例题图）
signs/                  Lesson 1 的标志图片
_sections/              各课小节清单
tools/extract.py        从扫描版 PDF 渲染页面、裁图的工具
LESSON-SPEC.md          单课页面的写作规范
```

## 本地预览

无需构建，直接打开 `index.html` 即可。或用任意静态服务器：

```bash
python3 -m http.server 8000
```

## 在线访问

启用 GitHub Pages 后访问：<https://iexplain.github.io/talk-english/>

## 说明

页码为课本内页码。词汇音标采用美式（General American），因为课程教师为美音老师。
