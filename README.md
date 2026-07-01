# starz0275.github.io

聂旭晶的个人网站，基于 [Docusaurus 3](https://docusaurus.io/) 构建，部署于 [GitHub Pages](https://starz0275.github.io)。

## 仓库怎么分

本仓库同时包含 **网站发布内容** 和 **Obsidian 本地笔记库**，职责分离：

| 目录           | 用途                         | Obsidian        | 网站发布 |
| -------------- | ---------------------------- | --------------- | -------- |
| `vault/`     | 本地私人笔记、面试准备、草稿 | ✅ 打开此文件夹 | ❌       |
| `docs/`      | 学习笔记、面试复盘（公开）   | 可选只读参考    | ✅       |
| `blog/`      | 博客文章                     | 可选            | ✅       |
| `src/pages/` | 首页、简历                   | ❌              | ✅       |
| `static/`    | 站点静态资源                 | ❌              | ✅       |

**Obsidian 用法**：在 Obsidian 中选择「打开文件夹」，指向本仓库下的 `vault/` 目录。编辑器配置（`.obsidian/`）不会提交到 Git。

**发布流程**：在 `vault/` 写完 → 整理后放进 `docs/` 或 `blog/` → `yarn build` → `yarn deploy`。

## 在线访问

- 网站：https://starz0275.github.io
- 源码：https://github.com/starz0275/starz0275.github.io

## 网站导航

| 模块     | 路径                        | 说明                 |
| -------- | --------------------------- | -------------------- |
| 首页     | `/`                       | 学习路线概览         |
| 学习笔记 | `/docs/intro`             | FreeRTOS、项目实践等 |
| 简历     | `/docs/category/简历`     | 按方向分类的简历入口 |
| 面试复盘 | `/docs/category/面试复盘` | 已面试记录与题库     |
| 博客     | `/blog`                   | 随笔与实验记录       |

## 内容目录

```
vault/                          # Obsidian 本地笔记库（打开此目录）
├── README.md
├── 面试/
│   ├── 准备中/                 # 待面试准备（不发布）
│   └── 总结模板.md
├── 草稿/
└── 私人/                       # gitignore，不提交

docs/                           # 网站文档（公开发布）
├── intro.md                    # 学习路线图入口
├── 简历/                       # 综合版 + 定向简历（卡片入口）
├── 学习笔记/
│   ├── FreeRTOS/
│   ├── 智能手环项目/
│   └── c项目/
├── 面试复盘/
│   ├── 面试进度总览.md
│   ├── 题库/                   # 技术题 + HR 题
│   └── 已面试/
└── 网站运维/                   # 建站与部署（侧边栏默认折叠）

blog/                           # 博客（MDX）
src/pages/
├── index.js                    # 首页
└── resume.js                   # /resume 重定向到简历分类页
```

## 技术栈

| 类别     | 技术                              |
| -------- | --------------------------------- |
| 框架     | Docusaurus 3.9.2                  |
| 前端     | React 19、MDX                     |
| 语言     | 简体中文                          |
| 运行环境 | Node.js >= 20                     |
| 包管理   | Yarn                              |
| 部署     | GitHub Pages（`gh-pages` 分支） |

## 本地开发

```bash
yarn          # 安装依赖
yarn start    # http://localhost:3000
yarn build    # 构建到 build/
yarn deploy   # 部署到 GitHub Pages
```

Windows 部署：

```powershell
cmd /C 'set "GIT_USER=starz0275" && yarn deploy'
```

## 常用命令

| 命令            | 说明         |
| --------------- | ------------ |
| `yarn start`  | 本地开发     |
| `yarn build`  | 生产构建     |
| `yarn serve`  | 预览构建结果 |
| `yarn deploy` | 部署         |
| `yarn clear`  | 清除缓存     |

## 新增内容

- **学习笔记**：`docs/学习笔记/` 下新建 `.md`
- **面试复盘**：复制 `vault/面试/总结模板.md`，完成后放入 `docs/面试复盘/已面试/`
- **博客**：`blog/` 下新建 `.mdx`，作者在 `blog/authors.yml`
- **简历**：`docs/简历/` 下新建，在 frontmatter 填写 `title` 和 `description`（分类页卡片展示用）

## 相关链接

- [GitHub](https://github.com/starz0275/starz0275.github.io)
- [CSDN](https://blog.csdn.net/niexujing)
- [LinkedIn](https://www.linkedin.com/in/%E6%97%AD%E6%99%B6-%E8%81%82-2696a53a1/)

## License

个人学习笔记网站，内容版权归作者所有。