'use client'

import { cn } from '@/lib/utils'
import { Button } from '../ui/button'

/**
 * 频道项组件
 * 显示单个频道按钮，处理选中状态和点击事件
 */
const ChannelItem = ({
  label,
  isSelected,
  onClick,
}: {
  label: string
  isSelected?: boolean
  onClick?: () => void
}) => {
  return (
    <Button
      variant="ghost"
      onClick={onClick}
      className={cn(
        'rounded-full text-[1rem] hover:bg-gray-100',
        'dark:hover:bg-gray-800',
        'flex h-[40px] cursor-pointer items-center justify-center px-4 select-none',
        isSelected
          ? 'bg-gray-100 font-semibold text-gray-700 dark:bg-gray-800 dark:text-white'
          : 'font-normal text-gray-500 dark:text-gray-400'
      )}
    >
      {label}
    </Button>
  )
}

export default ChannelItem
