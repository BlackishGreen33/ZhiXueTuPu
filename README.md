<div align="center">
  <img width="130" src="https://github.com/BlackishGreen33/ZhiXueTuPu/blob/main/public/logo.png?raw=true" alt="ZhiXueTuPu Logo">
  <h1 align="center">ZhiXueTuPu</h1>
  <h3>Learning Analytics System</h3>
  <a href="https://github.com/BlackishGreen33/ZhiXueTuPu"><strong>Explore Project Documentation »</strong></a>
  <br />
  <br />

![license](https://img.shields.io/github/license/BlackishGreen33/ZhiXueTuPu)
![language](https://img.shields.io/github/languages/top/BlackishGreen33/ZhiXueTuPu)
![last](https://img.shields.io/github/last-commit/BlackishGreen33/ZhiXueTuPu)

<a href="https://zhixuetupu.vercel.app/" target="_blank">Live Demo</a>
·
<a href="https://github.com/BlackishGreen33/ZhiXueTuPu/issues">Report Bug</a>
·
<a href="https://github.com/BlackishGreen33/ZhiXueTuPu/issues">Request Feature</a>

</div>

## 🔖 Project Overview

[中文文檔](./README-zh.md) | [README in English](./README.md)

Related Project: [The Prologue That Never Fades](https://github.com/BlackishGreen33/SaaS-Edu-Platform)

### ✨ Features

- AI-powered language model for intelligent conversational teaching
- MCP knowledge base retrieval for learning assistance
- Intelligent question generation and testing
- User management and authentication (`Admin`, `Instructor`, `Student`)
- Course data storage and management (`Instructor materials`, `Student notes`)
- Data visualization and analytics (`Dashboard`, `Knowledge Graph`)
- Multi-device responsive design
- Customizable themes and styles

### ✒️ Technologies

- **Main Framework**: [Next.js](https://nextjs.org/)
- **Frontend**: [React](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Component Libraries**: [shadcn/ui](https://ui.shadcn.com/) & [assistant-ui](https://www.assistant-ui.com/)
- **Charting**: [Syncfusion](https://www.syncfusion.com/) & [EChartsJS](https://www.echartsjs.com/)
- **State Management**: [React Query](https://tanstack.com/query/latest/docs/framework/react/overview) & [zustand](https://zustand-demo.pmnd.rs/)
- **Backend**: [Hono](https://hono.dev/)
- **Agent Framework**: [Mastra](https://mastra.ai/)
- **AI Voice Synthesis**: [Vapi](https://vapi.ai/)
- **Primary Database**: [MySQL](https://www.mysql.com/)
- **Secondary Database (Cache)**: [libSQL](https://turso.tech/libsql)
- **Database Tools**: [Prisma](https://www.prisma.io/)

### ✨ Commit Convention

- 🎉 init: Project initialization
- ✨ feat: New feature
- 🐞 fix: Bug fix
- 📃 docs: Documentation changes
- 🌈 style: Code style changes (no logic changes)
- ✅ test: Test related changes
- 🔨 refactor: Code refactoring
- 🔧 chore: Build process or tooling changes

### 🎯 Compatibility

- Modern browsers (Chrome >= 64, Edge >= 79, Firefox >= 78, Safari >= 12)
- node >= 20.18.0

### 💻 Local Development

Clone the repository and navigate to project directory:

```bash
$ git clone https://github.com/BlackishGreen33/ZhiXueTuPu.git
$ cd ZhiXueTuPu
```

Configure environment variables:

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

Install dependencies:

```bash
$ pnpm install
```

Generate Prisma client:

```bash
$ npx prisma generate
```

Activate chart library:

```bash
$ npx syncfusion-license activate
```

Start your debugging journey!

```bash
$ pnpm run dev
```

### 📝 Licensing

All the above files are licensed under the MIT License.

> For detailed licensing, please refer to the [LICENSE](LICENSE) file.
