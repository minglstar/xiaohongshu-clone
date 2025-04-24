# 小红书克隆项目文档

## 目录

1. [项目概述](#项目概述)
2. [技术栈](#技术栈)
3. [项目初始化与环境搭建](#项目初始化与环境搭建)
4. [项目结构](#项目结构)
5. [数据库设计](#数据库设计)
6. [认证系统](#认证系统)
7. [开发规范](#开发规范)
8. [部署指南](#部署指南)

## 项目概述

本项目是一个小红书克隆应用，旨在复制小红书的核心功能，包括用户注册/登录、内容发布、社交互动等功能。项目使用现代化的技术栈，包括Next.js、TypeScript、Tailwind CSS、PostgreSQL等。

## 技术栈

### 前端
- **Next.js 15.3.1**: 基于React的全栈框架
- **React 19.0.0**: 用户界面库
- **TypeScript**: 类型安全的JavaScript超集
- **Tailwind CSS v4**: 实用优先的CSS框架
- **shadcn/ui**: 基于Radix UI的组件库

### 后端
- **Next.js API Routes**: 服务端API实现
- **Prisma ORM**: 数据库访问层
- **NextAuth.js**: 认证系统
- **PostgreSQL**: 关系型数据库

### 开发工具
- **ESLint**: 代码质量检查
- **TypeScript**: 类型检查

## 项目初始化与环境搭建

### 1. 创建Next.js项目

使用create-next-app创建项目：

```bash
npx create-next-app@latest .
```

在创建过程中选择以下配置：
- 使用TypeScript: Yes
- 使用ESLint: Yes
- 使用Tailwind CSS: Yes
- 使用`src/`目录: Yes
- 使用App Router: Yes

### 2. TypeScript配置

项目使用TypeScript，配置已在项目初始化时完成。TypeScript配置文件`tsconfig.json`中使用ES2017作为目标，这是Next.js项目的推荐设置，可以保持较好的开发体验和运行时性能。

### 3. Tailwind CSS配置

项目使用Tailwind CSS v4，配置已在项目初始化时完成。Tailwind CSS v4使用新的配置方式，通过PostCSS插件完成，不再需要单独的`tailwind.config.js`文件。

配置文件：`postcss.config.mjs`
```javascript
const config = {
  plugins: ["@tailwindcss/postcss"],
};

export default config;
```

### 4. shadcn/UI组件库安装

安装shadcn/ui组件库：

```bash
npm install @radix-ui/react-slot @radix-ui/react-label
npx shadcn@latest init
```

在初始化过程中选择合适的配置，然后安装所需组件：

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add form
npx shadcn@latest add input
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
```

### 5. 项目结构设置

创建以下目录结构：

```bash
mkdir -p src/app/api
mkdir -p src/components/{ui,auth,layout,dashboard}
mkdir -p src/lib/{utils,validators,hooks}
mkdir -p src/types
mkdir -p src/services
mkdir -p src/contexts
mkdir -p prisma
mkdir -p doc
```

### 6. PostgreSQL数据库设置

使用Docker运行PostgreSQL：

```bash
docker run --name postgres -e POSTGRES_PASSWORD=yourpassword -e POSTGRES_USER=postgres -e POSTGRES_DB=xiaohongshu_clone -p 5432:5432 -d postgres
```

### 7. Prisma ORM配置

安装Prisma：

```bash
npm install prisma --save-dev
npm install @prisma/client
```

初始化Prisma：

```bash
npx prisma init
```

编辑`.env`文件，配置数据库连接：

```env
DATABASE_URL="postgresql://postgres:yourpassword@localhost:5432/xiaohongshu-clone?schema=public"
```

生成Prisma客户端并应用数据库迁移：

```bash
npx prisma generate
npx prisma migrate dev --name init
 ```

### 8. NextAuth.js认证配置

安装NextAuth.js：

```bash
npm install next-auth
```

## 项目结构

项目采用以下目录结构：

```
xiaohongshu-clone/
├── prisma/                # Prisma ORM配置
│   └── schema.prisma      # 数据库模型定义
├── public/                # 静态资源
├── src/                   # 源代码
│   ├── app/               # Next.js App Router
│   │   ├── api/           # API路由
│   │   │   └── auth/      # 认证API
│   │   ├── globals.css    # 全局样式
│   │   ├── layout.tsx     # 根布局
│   │   └── page.tsx       # 首页
│   ├── components/        # React组件
│   │   ├── ui/            # UI组件
│   │   ├── auth/          # 认证相关组件
│   │   ├── layout/        # 布局组件
│   │   └── dashboard/     # 仪表盘组件
│   ├── lib/               # 工具库
│   │   ├── prisma.ts      # Prisma客户端
│   │   ├── utils.ts       # 通用工具函数
│   │   ├── validators/    # 数据验证
│   │   └── hooks/         # 自定义Hooks
│   ├── types/             # TypeScript类型定义
│   ├── services/          # 服务层
│   └── contexts/          # React上下文
└── doc/                   # 项目文档
```

## 数据库设计

### 基础数据模型示例

以下是Prisma数据模型的示例，实际开发中会根据需求逐步完善：

```prisma
// 用户模型
model User {
  id            String    @id @default(cuid())
  name          String?
  email         String?   @unique
  phone         String?   @unique
  emailVerified DateTime?
  image         String?
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  posts         Post[]
  comments      Comment[]
  likes         Like[]
  follows       Follow[]  @relation("Follower")
  followers     Follow[]  @relation("Following")
}

// 帖子模型
model Post {
  id        String    @id @default(cuid())
  title     String
  content   String
  images    String[]
  published Boolean   @default(false)
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt
  authorId  String
  author    User      @relation(fields: [authorId], references: [id])
  comments  Comment[]
  likes     Like[]
  tags      Tag[]
}

// 评论模型
model Comment {
  id        String   @id @default(cuid())
  content   String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  postId    String
  post      Post     @relation(fields: [postId], references: [id], onDelete: Cascade)
  authorId  String
  author    User     @relation(fields: [authorId], references: [id])
}

// 点赞模型
model Like {
  id        String   @id @default(cuid())
  createdAt DateTime @default(now())
  postId    String
  post      Post     @relation(fields: [postId], references: [id], onDelete: Cascade)
  userId    String
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([postId, userId])
}

// 关注模型
model Follow {
  id          String   @id @default(cuid())
  createdAt   DateTime @default(now())
  followerId  String
  followingId String
  follower    User     @relation("Follower", fields: [followerId], references: [id], onDelete: Cascade)
  following   User     @relation("Following", fields: [followingId], references: [id], onDelete: Cascade)

  @@unique([followerId, followingId])
}

// 标签模型
model Tag {
  id    String @id @default(cuid())
  name  String @unique
  posts Post[]
}
```

## 认证系统

项目计划使用手机号验证码登录方式。以下是NextAuth.js的基本配置示例：

```typescript
// src/app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/lib/prisma"
import CredentialsProvider from "next-auth/providers/credentials"

/**
 * NextAuth处理程序
 * 配置认证提供者和适配器
 */
const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Phone",
      credentials: {
        phone: { label: "手机号", type: "text" },
        code: { label: "验证码", type: "text" }
      },
      async authorize(credentials) {
        if (!credentials?.phone || !credentials?.code) {
          return null
        }

        // 验证手机号和验证码
        // 实际实现中需要与短信验证服务集成
        
        const user = await prisma.user.findUnique({
          where: {
            phone: credentials.phone
          }
        })

        // 如果用户不存在，创建新用户
        if (!user) {
          // 创建新用户逻辑
        }

        return user
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.sub!
      }
      return session
    }
  }
})

export { handler as GET, handler as POST }
```

## 开发规范

### 代码风格

- 使用ESLint进行代码质量检查
- 使用Prettier进行代码格式化
- 遵循TypeScript类型安全原则

### 组件开发规范

- 使用函数组件和React Hooks
- 组件文件使用PascalCase命名
- 工具函数使用camelCase命名
- 组件应当是可复用的，避免过度耦合

### Git提交规范

使用Angular提交规范：

- feat: 新功能
- fix: 修复bug
- docs: 文档更新
- style: 代码风格更改
- refactor: 代码重构
- test: 测试相关
- chore: 构建过程或辅助工具的变动

## 部署指南

### 开发环境

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

### 生产环境

```bash
# 构建项目
npm run build

# 启动生产服务器
npm run start
```

### 数据库迁移

```bash
# 生成迁移
npx prisma migrate dev --name init

# 应用迁移到生产环境
npx prisma migrate deploy
```

---

本文档将随着项目的进展不断更新和完善。
