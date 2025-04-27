'use client'

import { cn } from '@/lib/utils'
import { type CSSProperties, type ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
}

/**
 * 响应式容器组件
 * 提供统一的内容容器样式，确保在不同屏幕尺寸下有一致的最大宽度和边距
 *
 * @param props.children - 容器内的内容
 * @param props.className - 可选的额外CSS类名
 * @param props.style - 可选的内联样式
 */
export default function Container({ children, className = '', style = {} }: ContainerProps) {
  return (
    <div
      className={cn('mx-auto max-w-[2520px] px-4 sm:px-2 md:px-10 xl:px-20', className)}
      style={style}
    >
      {children}
    </div>
  )
}
