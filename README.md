# muchen的秘密基地

这是一个基于 [Docusaurus](https://docusaurus.io/) 构建的个人博客网站，用于分享技术文章、学习笔记和个人经验。

## 主要功能

- 📝 技术博客
- 📚 文档中心
- 🤖 AI编程专题
- 💬 ChatGPT专题
- 🔍 全文搜索

## 目录结构

```
muchen-secret-base/
├── blog/                 # 博客文章
├── docs/                 # 文档
│   ├── ai-programming/  # AI编程相关文档
│   ├── chatgpt/        # ChatGPT相关文档
│   └── tutorial/       # 教程文档
├── src/                 # 源代码
│   ├── components/     # React组件
│   ├── css/           # 样式文件
│   └── pages/         # 静态页面
└── static/             # 静态资源
    └── img/           # 图片资源
```

## 技术栈

- [Docusaurus](https://docusaurus.io/) - 现代静态网站生成器
- React - 用户界面构建
- Markdown/MDX - 内容创作

## 快速开始

### 环境要求

- Node.js (v20.19.1+)
- npm 或 yarn

### 安装

```bash
# 安装依赖
yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
