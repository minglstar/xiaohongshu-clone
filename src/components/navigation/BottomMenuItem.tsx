'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'

/**
 * 底部菜单项组件
 * 用于移动端底部导航栏的单个菜单项
 * 支持图标、文本、活动状态和点击事件
 */
interface BottomMenuItemProps {
  icon?: React.ElementType
  label: string
  href: string
  isActive?: boolean
  onClick?: () => void
}

const BottomMenuItem = ({
  icon: Icon,
  label,
  href,
  isActive,
  onClick,
}: BottomMenuItemProps) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      style={{ color: '--xhsc-color-primary-label' }}
      className="flex h-[48px] grow-1 cursor-pointer items-center justify-center"
    >
      {Icon && (
        <Icon
          size={24}
          className={cn(
            isActive ? 'text-black dark:text-white' : 'text-gray-700 dark:text-gray-400'
          )}
        />
      )}
      <span className="ml-3 hidden text-[16px] sm:block">{label}</span>
    </Link>
  )
}

export default BottomMenuItem