<div align="center">
  <img width="130" src="https://github.com/BlackishGreen33/ZhiXueTuPu/blob/main/public/logo.png?raw=true" alt="智学图谱 Logo">
  <h1 align="center">智学图谱</h1>
  <h3>学习分析系统</h3>
  <a href="https://github.com/BlackishGreen33/ZhiXueTuPu"><strong>探索项目文档 »</strong></a>
  <br />
  <br />

![license](https://img.shields.io/github/license/BlackishGreen33/ZhiXueTuPu)
![language](https://img.shields.io/github/languages/top/BlackishGreen33/ZhiXueTuPu)
![last](https://img.shields.io/github/last-commit/BlackishGreen33/ZhiXueTuPu)

<a href="https://zhixuetupu.vercel.app/" target="_blank">在线体验</a>
·
<a href="https://github.com/BlackishGreen33/ZhiXueTuPu/issues">报告Bug</a>
·
<a href="https://github.com/BlackishGreen33/ZhiXueTuPu/issues">提出新特性</a>

</div>

## 🔖 项目导览

[中文文檔](./README-zh.md) | [README in English](./README.md)

关联项目：[永不落幕的前奏诗](https://github.com/BlackishGreen33/SaaS-Edu-Platform)

### ✨ 現有功能

- AI 语言大模型智能口语对话教学
- MCP 知识库检索学习辅助
- 智能学习问题生成与测试
- 用户管理与认证（`管理员`、`导师`、`学生`）
- 课程数据存储与管理（`导师课件`、`学生笔记`）
- 图表展示与数据分析（`仪表盘`、`知识图谱`）
- 多端适配与响应式设计
- 自定义主题与样式

### ✒️ 引用技術

- **开发主框架**: [Next.js](https://nextjs.org/)
- **前端框架**：[React](https://react.dev/)
- **样式框架**: [Tailwind CSS](https://tailwindcss.com/)
- **组件库**：[shadcn/ui](https://ui.shadcn.com/) & [assistant-ui](https://www.assistant-ui.com/)
- **图表库**：[Syncfusion](https://www.syncfusion.com/) & [EChartsJS](https://www.echartsjs.com/)
- **状态管理**：[React Query](https://tanstack.com/query/latest/docs/framework/react/overview) & [zustand](https://zustand-demo.pmnd.rs/)
- **后端框架**：[Hono](https://hono.dev/)
- **Agent 框架**：[Mastra](https://mastra.ai/)
- **AI 人声化**：[Vapi](https://vapi.ai/)
- **主数据库**：[MySQL](https://www.mysql.com/)
- **辅数据库（暂存）**：[libSQL](https://turso.tech/libsql)
- **数据库工具**：[Prisma](https://www.prisma.io/)

### ✨ 提交规范

- 🎉 init：项目初始化
- ✨ feat：新增功能（feature）
- 🐞 fix：修复bug
- 📃 docs：文档修改
- 🌈 style：代码样式修改，不影响原代码逻辑
- ✅ test：测试相关的改动
- 🔨 refactor：代码重构
- 🔧 chore：建制过程或辅助工具的变动

### 🎯 相容环境

- 现代浏览器（Chrome >= 64, Edge >= 79, Firefox >= 78, Safari >= 12）
- node >= 20.18.0

### 💻 本地调试

拉取代码并切换到项目目录下：

```bash
$ git clone https://github.com/BlackishGreen33/ZhiXueTuPu.git
$ cd ZhiXueTuPu
```

配置环境变量：

```env
# Database
DATABASE_URL=

# API URL
API_URL=

# NextAuth
NEXTAUTH_URL=
NEXTAUTH_SECRET=

# Google & GitHub Auth
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# Syncfusion
SYNCFUSION_LICENSE=

# Gemini
GOOGLE_GENERATIVE_AI_API_KEY=
```

安装依赖：

```bash
$ pnpm install
```

生成 Prisma 客户端：

```bash
$ npx prisma generate
```

激活图表库：

```bash
$ npx syncfusion-license activate
```

开始调试你的调试之旅！

```bash
$ pnpm run dev
```

### 📝 授权

上述文件皆以 MIT 许可授权

> 详细之授权请参考 [LICENSE](LICENSE) 文件
