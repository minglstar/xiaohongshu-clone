'use client'

import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface MainContentProps {
  children: ReactNode
  className?: string
}

/**
 * 主内容区域组件
 * 负责内容区域的布局和样式
 * 注意：这不是全局容器，而是全局容器内的内容区域
 */
const MainContent = ({ children, className }: MainContentProps) => {
  return (
    <div
      className={cn(
        'w-full overflow-hidden',
        'mt-[72px] pl-6 md:ml-[236px]', // 为顶部导航和侧边栏留出空间
        className
      )}
    >
      {children}
    </div>
  )
}

export default MainContent
