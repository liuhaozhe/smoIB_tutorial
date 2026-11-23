# smoIB

使用 Astro + Starlight 构建的英文科研教程网站，以运行空间多组学整合方法和复现基准实验为主线，并提供方法原理讲解。[访问在线教程](https://liuhaozhe.github.io/smoIB_tutorial/)

## 本地运行

建议使用 Node.js 24 LTS 和 npm。

```bash
npm ci
npm run dev
```

开发模式支持内容热更新。完整预览（包含全文搜索）：

```bash
npm run build
npm run preview -- --port 4321
```

打开 [本地预览](http://localhost:4321/smoIB_tutorial/)。更新教程后，重新构建即可刷新预览内容和 Pagefind 搜索索引。

## 内容与导航

| 路径（相对于 `src/content/docs/`） | 内容 |
| --- | --- |
| `index.mdx` | 概览、任务入口与论文引用 |
| `guides/installation.md` | 环境安装 |
| `guides/data-preparation.md` | 数据准备 |
| `guides/getting-started.md` | 最小运行路径 |
| `tutorials/single-dataset.md` | Tutorial 1：单数据集分析 |
| `tutorials/benchmark-reproduction.md` | Tutorial 2：基准实验复现 |
| `paper/methods.md` | 方法原理与比较 |
| `reference/faq.md` | 科研运行与复现排错 |

站点标题、语言及导航顺序在 `astro.config.mjs` 中配置，少量外观样式位于 `src/styles/custom.css`。新增页面后需加入导航，并检查上下篇顺序和站内链接。

## 补充真实科研内容

目前提供教程结构和操作检查要点，尚未包含可执行的科研案例。论文信息、代码仓库、数据资源、方法清单、环境版本和参考结果均需核实后补充。

每个正式案例应包含数据来源、固定代码版本、环境文件、硬件要求、预计用时、可下载 Notebook 或脚本，以及逐步配对的代码与输出。基准复现还应提供比较协议、重复运行配置、指标定义和论文图表映射。区分论文结论、复现观察与补充解释，不将示意配置写成经过验证的实验命令。

旧的站点功能演示文章已从内容与导航中移除。

## 发布

推送到 `main` 分支后，GitHub Actions 会构建网站并将 `dist/` 部署到 GitHub Pages。[查看部署记录](https://github.com/liuhaozhe/smoIB_tutorial/actions/workflows/pages.yml)
