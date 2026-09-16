# 静态网页配置个人笔记

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

---
*以上为个人学习与工作中整理的静态网页配置笔记，供后续参考与快速上手。* 
```tool
TOOL_NAME: edit_existing_file
BEGIN_ARG: filepath
"pages.md"