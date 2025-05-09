'use client'

import { cn } from '@/lib/utils'
import { Bell, House, PlusSquare } from 'lucide-react'
import { usePathname } from 'next/navigation'
import LoginPrompt from '../auth/LoginPrompt'
import ExploreGuideMenu from '../navigation/ExploreGuideMenu'
import SideMenuItem from '../navigation/SideMenuItem'
import { Button } from '../ui/button'

export const sideMenus = [
  {
    icon: House,
    label: '发现',
    href: '/explore',
  },
  {
    icon: PlusSquare,
    label: '发布',
    href: '/create',
  },
  {
    icon: Bell,
    label: '通知',
    href: '/notification',
  },
]

/**
 * 侧边栏组件
 * 显示主导航菜单、登录提示和更多选项
 * 仅在中等及以上屏幕尺寸显示
 */
const Sidebar = () => {
  const pathname = usePathname()

  return (
    <aside
      className={cn(
        // 基础样式
        'fixed top-[72px] flex h-[calc(100vh-72px)] shrink-0 flex-col overflow-visible bg-white pt-4',
        'dark:border-gray-800 dark:bg-gray-950',
        // 响应式显示
        'hidden md:block',
        // 固定宽度 - 近似值
        'ml-4 w-[220px]'
      )}
    >
      {/* 主导航组件: channel-list */}
      <ul className="m-0 min-h-auto list-none p-0">
        {sideMenus.map(sideMenu => (
          <SideMenuItem
            key={sideMenu.href}
            icon={sideMenu.icon}
            label={sideMenu.label}
            href={sideMenu.href}
            isActive={pathname === sideMenu.href}
          />
        ))}
        <div>
          <Button className="mb-2 h-[48px] w-full rounded-full bg-rose-500 py-0 text-[1rem] font-semibold text-white hover:bg-rose-600">
            登录
          </Button>
        </div>
      </ul>
      
      {/* 登录提示: login prompt */}
      <LoginPrompt />
      
      {/* 更多: explore guide menu */}
      <ExploreGuideMenu />
    </aside>
  )
}

export default Sidebar
