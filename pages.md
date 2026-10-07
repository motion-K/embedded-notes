# 静态网页配置个人笔记
> *[跳转到正式开始](#快速开始)*
## 基本概念
- 静态网页：HTML、CSS、JS 预先生成，无需服务器端运行时。
- 优点：加载快、安全、易于托管（如 GitHub Pages、Netlify、Vercel）。

## 常用工具
- **VitePress**：基于 Vite + Vue 的静态站点生成器，适合文档。
- **Hugo**：用 Go 编写，速度极快，适合博客。
- **Jekyll**：Ruby 基础，GitHub Pages 原生支持。
- **Astro**：支持多种框架（React、Vue、Svelte）的混合渲染。
- **Eleventy (11ty)**：简单灵活，基于 JavaScript。

## 配置步骤（以 VitePress 为例）
1. **初始化项目**
   ```bash
   npm init vitepress
   # 选择默认配置或自定义
   cd <project-name>
   npm install
   ```

2. **基本目录结构**
   ```
   .
   ├─ docs/          # Markdown 源文件
   │   ├─ index.md
   │   └─ guide/
   ├─ .vitepress/    # VitePress 配置
   │   ├─ config.ts
   │   └─ theme/
   ├─ package.json
   └─ node_modules/
   ```

3. **配置文件（.vitepress/config.ts）**
   ```ts
   import { defineConfig } from 'vitepress'

   export default defineConfig({
     title: '我的静态站点',
     description: '使用 VitePress 搭建的个人笔记',
     themeConfig: {
       nav: [
         { text: '首页', link: '/' },
         { text: '指南', link: '/guide/' }
       ],
       sidebar: {
         '/guide/': [
           { text: '介绍', link: '/guide/intro' },
           { text: '进阶', link: '/guide/advanced' }
         ]
       }
     }
   })
   ```

4. **开发与预览**
   ```bash
   npm run docs:dev   # http://localhost:5173
   ```

5. **构建生产文件**
   ```bash
   npm run docs:build # 生成到 .vitepress/dist
   ```

6. **部署**
   - **GitHub Pages**：将 dist 内容推送到 gh-pages 分支或使用 GitHub Actions。
   - **Netlify**：连接仓库，设置构建命令 `npm run docs:build`，发布目录 `.vitepress/dist`。
   - **Vercel**：同上，自动检测 VitePress。

## 常见配置项说明
| 配置项 | 作用 | 示例 |
|--------|------|------|
| `base` | 部署子路径 | `/blog/` |
| `outDir` | 构建输出目录（相对项目根） | `dist` |
| `cleanUrls` | 去掉 `.html` 后缀 | `true` |
| `lastUpdated` | 显示页面最后更新时间 | `{ text: '更新于', formatOptions: { dateStyle: 'short', timeStyle: 'medium' } }` |
| `head` | 注入额外的 `<head>` 元素 | `[['link', { rel: 'icon', href: '/favicon.ico' }]]` |

## 常见问题 & 技巧
- **图片路径**：在 Markdown 中使用相对路径，构建时会自动处理；放在 `public/` 目录下的资源将直接复制到根目录。
- **自定义样式**：在 `.vitepress/theme/index.css` 中覆盖变量或添加全局样式。
- **国际化**：VitePress 目前原生不支持多语言，可采用目录划分（如 `en/`、`zh/`）并手动切换导航。
- **搜索**：使用官方插件 `@vitepress/plugin-search` 或第三方如 DocSearch、Algolia。
- **性能**：启用 `vite` 的 `build.rollupOptions` 压缩、开启 gzip/brotli，利用 CDN 加速。

## 参考链接
- VitePress 官方文档：https://vitepress.dev/
- Hugo 官方文档：https://gohugo.io/documentation/
- Jekyll 官方文档：https://jekyllrb.com/docs/
- Astro 官方文档：https://docs.astro.build/
- Netlify 部署指南：https://docs.netlify.com/site-deploys/create-deploys/
- Vercel 静态站点部署：https://vercel.com/docs/concepts/deployments/overview

> **提示**：经常查看 `package.json` 中的脚本，`docs:dev`、`docs:build`、`docs:preview` 能让工作流更顺畅。

```
*以上为个人学习与工作中整理的静态网页配置笔记，供后续参考与快速上手。**至此为Ai生成的前期准备，具体网页配置的相关内容从此处开始*** 
```

<a id = "快速开始"></a>
# HTML 基础标签与属性

HTML（HyperText Markup Language，超文本标记语言）通过**标签（Tag）**描述网页中的不同元素。
HTML 标签通常采用成对的形式：

```html
<p>这是一个段落</p>
```

其中：

```text
<p>              → 开始标签
这是一个段落      → 内容
</p>             → 结束标签
```

有些标签不需要结束标签，例如：

```html
<img src="image.png">
<br>
```

---

## 1. HTML 标签（Tag）

HTML 中有很多不同类型的标签，每种标签具有不同的语义和用途。

### 1.1 标题

HTML 提供 6 级标题：

```html
<h1>一级标题</h1>
<h2>二级标题</h2>
<h3>三级标题</h3>
<h4>四级标题</h4>
<h5>五级标题</h5>
<h6>六级标题</h6>
```

其中：

* `<h1>`：最高级标题
* `<h2>`：二级标题
* `<h3>`：三级标题
* ...
* `<h6>`：六级标题

在 Markdown 中通常对应：

```markdown
# 一级标题
## 二级标题
### 三级标题
```

---

## 2. 段落 `<p>`

`<p>` 表示一个段落（Paragraph）。

```html
<p>这是第一段。</p>

<p>这是第二段。</p>
```

浏览器通常会在两个 `<p>` 元素之间产生一定的间距。

---

## 3. 换行 `<br>`

`<br>` 表示换行（Break）。

```html
第一行<br>
第二行
```

显示为：

```text
第一行
第二行
```

`<br>` 不需要：

```html
</br>
```

---

## 4. 加粗 `<strong>` 和 `<b>`

### `<strong>`

表示具有较强重要性的内容：

```html
<strong>重要内容</strong>
```

通常会显示为粗体。

### `<b>`

表示视觉上的粗体：

```html
<b>粗体文字</b>
```

二者视觉效果可能类似，但语义不同。

一般情况下，如果内容确实具有重要性，推荐使用：

```html
<strong>重要内容</strong>
```

---

## 5. 斜体 `<em>` 和 `<i>`

### `<em>`

表示强调：

```html
<em>强调内容</em>
```

### `<i>`

通常表示不同语态、术语、外文词汇等：

```html
<i>English</i>
```

二者通常都会显示为斜体，但语义有所区别。

---

## 6. 超链接 `<a>`

`<a>` 是 Anchor 的缩写，表示超链接或锚点。

最常见的形式：

```html
<a href="https://example.com">点击这里</a>
```

其中：

```text
<a>                 → a 标签
href="..."          → href 属性
点击这里             → 显示的文字
</a>                → 结束标签
```

`href`（Hypertext Reference）表示链接的目标地址。

例如：

```html
<a href="https://www.st.com/">ST 官网</a>
```

---

## 7. `<a>` 的页面内部跳转

`<a>` 不仅可以跳转到其他网页，也可以作为页面内部的锚点。

例如：

```html
<a id="ram"></a>
```

这里：

* `a` 是 HTML 标签
* `id` 是 HTML 属性
* `ram` 是这个元素的 ID 值

然后可以使用：

```markdown
[跳转到 RAM](#ram)
```

点击后，页面会跳转到：

```html
<a id="ram"></a>
```

所在的位置。

### `a` 和 `id` 不要混淆

```html
<a id="ram"></a>
↑   ↑
标签 属性
```

`a` 是固定的 HTML 标签名称。

`ram` 是自己定义的 ID，可以修改：

```html
<a id="ram"></a>
<a id="sfr"></a>
<a id="uart"></a>
```

但是同一个页面中，`id` 应该保持唯一。

---

## 8. `id` 属性

`id` 用于给 HTML 元素指定一个唯一标识符。

例如：

```html
<p id="intro">这是介绍</p>
```

这里：

```text
p       → 标签
id      → 属性
intro   → id 的值
```

其他 HTML 元素也可以使用 `id`：

```html
<p id="intro">介绍</p>

<div id="content">内容</div>

<a id="ram"></a>
```

因此：

> `id` 并不是 `<a>` 专用的属性。

它可以用于很多 HTML 元素。

---

## 9. `class` 属性

`class` 用于给元素指定一个或多个类别。

例如：

```html
<p class="warning">注意事项</p>
```

多个元素可以使用相同的 `class`：

```html
<p class="note">内容1</p>
<p class="note">内容2</p>
<p class="note">内容3</p>
```

因此：

* `id`：通常用于唯一标识一个元素
* `class`：通常用于给多个元素进行分类

可以简单理解为：

```text
id    → 身份证
class → 类别
```

例如：

```html
<p id="main-title" class="title">单片机笔记</p>
```

表示：

```text
这个元素的 ID 是 main-title
这个元素属于 title 类
```

---

## 10. `<div>`

`<div>` 是一个通用容器（Division）。

```html
<div>
    这里是一组内容
</div>
```

它本身通常没有特殊的语义，主要用于对页面内容进行组织和布局。

例如：

```html
<div class="note">
    <h2>8052</h2>
    <p>8052 具有 256B 内部 RAM。</p>
</div>
```

这里 `<div>` 把标题和段落放在了同一个容器中。

---

## 11. `<span>`

`<span>` 也是一个通用容器，但通常用于包裹一小段行内内容。

例如：

```html
<p>
    STM32 使用
    <span class="important">32 位 Cortex-M</span>
    内核。
</p>
```

`<div>` 和 `<span>` 可以简单理解为：

```text
<div>   → 通常用于较大的内容区域
<span>  → 通常用于一小段文字
```

---

## 12. 图片 `<img>`

`<img>` 用于显示图片。

```html
<img src="image.png">
```

其中：

```text
src → 图片地址
```

也可以指定替代文本：

```html
<img src="image.png" alt="STM32 开发板">
```

`alt` 用于描述图片内容，在图片无法加载等情况下尤其有用。

---

## 13. 列表

### 无序列表 `<ul>`

```html
<ul>
    <li>GPIO</li>
    <li>USART</li>
    <li>SPI</li>
</ul>
```

显示为：

* GPIO
* USART
* SPI

其中：

```text
<ul> → Unordered List
<li> → List Item
```

### 有序列表 `<ol>`

```html
<ol>
    <li>初始化 GPIO</li>
    <li>初始化 USART</li>
    <li>发送数据</li>
</ol>
```

显示为：

1. 初始化 GPIO
2. 初始化 USART
3. 发送数据

---

## 14. 表格

HTML 可以使用 `<table>` 创建表格：

```html
<table>
    <tr>
        <th>名称</th>
        <th>功能</th>
    </tr>

    <tr>
        <td>GPIO</td>
        <td>通用输入输出</td>
    </tr>

    <tr>
        <td>USART</td>
        <td>串行通信</td>
    </tr>
</table>
```

其中：

```text
<table> → 表格
<tr>    → Table Row，表格行
<th>    → Table Header，表头
<td>    → Table Data，数据单元格
```

---

## 15. HTML 标签与属性的关系

一个 HTML 元素通常可以写成：

```html
<标签 属性="值">内容</标签>
```

例如：

```html
<a href="https://example.com" id="example">
    点击这里
</a>
```

可以拆成：

```text
a
│
├── href="https://example.com"
│       └── 属性：链接目标
│
├── id="example"
│       └── 属性：元素唯一标识
│
└── 点击这里
        └── 元素内容
```

所以：

> **标签决定元素是什么，属性用于进一步描述或控制这个元素。**

---

## 16. 一个元素可以同时拥有多个属性

例如：

```html
<a
    id="stm32"
    href="https://www.st.com/"
    target="_blank"
>
    STM32 官网
</a>
```

这里 `<a>` 只有一个，但具有三个属性：

```text
id
href
target
```

它们分别控制不同的功能。

---

## 17. `target` 属性

`target` 可以指定链接打开方式。

例如：

```html
<a href="https://example.com" target="_blank">
    打开网页
</a>
```

常见的：

```text
_blank → 通常在新标签页打开
_self  → 当前页面打开
```

---

## 18. HTML 与 Markdown 的关系

Markdown 提供了一种更加简洁的文本编写方式。

例如 Markdown：

```markdown
[点击这里](https://example.com)
```

最终可以转换成类似：

```html
<a href="https://example.com">点击这里</a>
```

因此二者的关系可以简单理解为：

```text
Markdown
   ↓
更简洁的写法
   ↓
HTML
   ↓
浏览器
   ↓
网页
```

在 VitePress 中，`.md` 文件可以同时使用 Markdown 和 HTML。

例如：

```markdown
# STM32 笔记

这是 Markdown。

<a id="gpio"></a>

## GPIO

这里仍然可以使用 Markdown。

[跳转到 GPIO](#gpio)
```

---

## 19. 常见 HTML 标签总结

| 标签            | 作用        |
| ------------- | --------- |
| `<h1>`～`<h6>` | 标题        |
| `<p>`         | 段落        |
| `<br>`        | 换行        |
| `<a>`         | 超链接 / 锚点  |
| `<strong>`    | 重要内容      |
| `<b>`         | 粗体        |
| `<em>`        | 强调        |
| `<i>`         | 斜体 / 特殊语义 |
| `<img>`       | 图片        |
| `<div>`       | 通用块级容器    |
| `<span>`      | 通用行内容器    |
| `<ul>`        | 无序列表      |
| `<ol>`        | 有序列表      |
| `<li>`        | 列表项       |
| `<table>`     | 表格        |
| `<tr>`        | 表格行       |
| `<th>`        | 表头单元格     |
| `<td>`        | 数据单元格     |

---

## 20. 常见 HTML 属性

| 属性       | 常见用途        |
| -------- | ----------- |
| `id`     | 给元素指定唯一标识   |
| `class`  | 给元素指定类别     |
| `href`   | 指定链接目标      |
| `src`    | 指定资源地址，例如图片 |
| `alt`    | 图片替代文本      |
| `target` | 指定链接打开方式    |
| `title`  | 提供额外说明      |
| `style`  | 直接设置 CSS 样式 |

### 最重要的区别

```html
<a id="ram"></a>
```

表示：

> 创建一个 `a` 元素，并给它一个叫 `ram` 的 ID。

```html
<a href="https://example.com">点击</a>
```

表示：

> 创建一个 `a` 元素，并让它指向指定网页。

```html
<p class="note">注意事项</p>
```

表示：

> 创建一个段落，并把它归入 `note` 这个类别。

因此：

```text
标签（Tag）
    ↓
决定“它是什么”

属性（Attribute）
    ↓
描述“它具有什么特征/行为”

内容（Content）
    ↓
决定“它里面显示什么”
```
