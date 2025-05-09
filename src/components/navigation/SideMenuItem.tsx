'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'

/**
 * 侧边栏菜单项组件
 * 用于显示侧边栏中的单个导航项
 * 支持图标、文本、活动状态和点击事件
 */
interface SideMenuItemProps {
  icon?: React.ElementType // 可选的图标组件
  label: string // 导航项文本
  href: string // 导航项链接
  isActive?: boolean // 是否为当前活动项
  onClick?: () => void // 点击事件处理函数
}

const SideMenuItem = ({
  icon: Icon,
  label,
  href,
  isActive,
  onClick,
}: SideMenuItemProps) => {
  return (
    <li
      className={cn(
        'mb-2 min-h-[48px] cursor-pointer rounded-full leading-tight font-semibold transition-colors',
        'flex items-center justify-between pl-4',
        isActive
          ? 'bg-gray-100 font-medium dark:bg-gray-800'
          : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800'
      )}
    >
      <Link
        href={href}
        onClick={onClick}
        className="flex h-[48px] w-full items-center text-[12px] font-semibold"
      >
        {/* 图标和文本的容器 */}
        {/* 条件渲染图标 */}
        {Icon && (
          <Icon
            size={20}
            className={isActive ? 'text-black dark:text-white' : 'text-gray-700 dark:text-gray-400'}
          />
        )}
        {/* 文本 */}
        <span className={cn('ml-3 text-[16px] font-semibold', isActive ? 'font-medium' : '')}>
          {label}
        </span>
      </Link>
    </li>
  )
}

export default SideMenuItem