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
lessons/lesson-01.html  Lesson 1: What Do These Signs Mean?
assets/style.css        全站共享样式（跟随系统深色模式、支持打印）
signs/                  从课本裁出的标志图片
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
