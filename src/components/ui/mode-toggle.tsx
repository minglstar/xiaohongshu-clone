'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Moon, Sun, SlidersHorizontal } from 'lucide-react'

/**
 * 主题切换组件
 * 使用基本的 HTML 和 Tailwind CSS 实现主题模式切换
 * 提供系统默认、亮色模式和暗色模式三种选项
 */
export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // 防止水合错误
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="ml-auto flex rounded-full bg-gray-100 p-1">
      <button
        onClick={() => setTheme('system')}
        className={`flex h-6 w-6 items-center justify-center rounded-full p-1.5 ${
          theme === 'system' ? 'bg-white shadow-sm' : 'text-gray-500 hover:bg-gray-200'
        }`}
        aria-label="跟随系统"
      >
        <SlidersHorizontal className="h-3 w-3" />
      </button>
      <button
        onClick={() => setTheme('light')}
        className={`flex h-6 w-6 items-center justify-center rounded-full p-1.5 ${
          theme === 'light' ? 'bg-white shadow-sm' : 'text-gray-500 hover:bg-gray-200'
        }`}
        aria-label="亮色模式"
      >
        <Sun className="h-3 w-3" />
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`flex h-6 w-6 items-center justify-center rounded-full p-1.5 ${
          theme === 'dark' ? 'bg-white shadow-sm' : 'text-gray-500 hover:bg-gray-200'
        }`}
        aria-label="暗色模式"
      >
        <Moon className="h-3 w-3" />
      </button>
    </div>
  )
}
