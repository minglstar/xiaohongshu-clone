import { PrismaClient } from '@prisma/client'

/**
 * 全局Prisma客户端实例
 * 在开发环境中避免热重载时创建多个实例
 */
const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma