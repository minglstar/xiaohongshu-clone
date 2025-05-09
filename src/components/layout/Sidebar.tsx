'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import { Bell, House, Menu, MessageCircle, PlusSquare, Sprout, Star, ThumbsUp } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'
import { ModeToggle } from '../ui/mode-toggle'

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

const SideMenuItem = ({
  icon: Icon,
  label,
  href,
  isActive,
  onClick,
}: {
  icon?: React.ElementType // 可选的图标组件
  label: string // 导航项文本
  href: string // 导航项链接
  isActive?: boolean // 是否为当前活动项
  onClick?: () => void // 点击事件处理函数
}) => {
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

const ExploreGuideMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="absolute bottom-0 inline-block w-full text-[16px] text-gray-700">
          <div
            className={cn(
              'relative mb-5 flex h-[48px] w-full cursor-pointer items-center rounded-full font-semibold select-none hover:bg-gray-50',
              'dark:text-gray-300 dark:hover:bg-gray-800'
            )}
          >
            <Menu size={24} className="mr-3 ml-4" />
            更多
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side="top"
        align="start"
        alignOffset={0}
        className="w-[var(--radix-dropdown-menu-trigger-width)] font-light text-gray-700"
      >
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>关于小红书</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className="font-light text-gray-700">
                <DropdownMenuItem>关于我们</DropdownMenuItem>
                <DropdownMenuItem>新闻中心</DropdownMenuItem>
                <DropdownMenuItem>社会责任</DropdownMenuItem>
                <DropdownMenuItem>加入我们</DropdownMenuItem>
                <DropdownMenuItem>English</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>隐私 协议</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className="font-light text-gray-700">
                <DropdownMenuItem>用户协议</DropdownMenuItem>
                <DropdownMenuItem>隐私政策</DropdownMenuItem>
                <DropdownMenuItem>侵权投诉指引</DropdownMenuItem>
                <DropdownMenuItem>热点规则</DropdownMenuItem>
                <DropdownMenuItem>社区规范</DropdownMenuItem>
                <DropdownMenuItem>下载小红书App</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>帮助与客服</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="text-[12px] text-gray-400">访问方式</DropdownMenuItem>
          <DropdownMenuItem>键盘快捷键</DropdownMenuItem>
          <DropdownMenuItem>添加小红书到桌面</DropdownMenuItem>
          <DropdownMenuItem>打开小窗模式</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="text-[12px] text-gray-400">设置</DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-transparent focus:bg-transparent">
            <div className="flex w-full items-center justify-between">
              <span>深色模式</span>
              <ModeToggle />
            </div>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

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
      <div
        className={cn(
          'z-0 h-[155px] w-full cursor-pointer p-4',
          'rounded-xl border-[1px] border-solid border-gray-200 bg-white',
          'dark:border-gray-700 dark:text-gray-400'
        )}
      >
        <p className="mb-3 text-[14px] font-medium text-gray-900 dark:text-gray-300">
          马上登录即可
        </p>
        <div className="mb-2 flex text-gray-500">
          <ThumbsUp size={16} className="mr-2" />
          <span className="text-[14px] leading-[120%]">刷到更懂你的优质内容</span>
        </div>
        <div className="mb-2 flex text-gray-500">
          <Sprout size={16} className="mr-2" />
          <span className="text-[14px] leading-[120%]">搜索最新种草、拔草信息</span>
        </div>
        <div className="mb-2 flex text-gray-500">
          <Star size={16} className="mr-2" />
          <span className="text-[14px] leading-[120%]">查看收藏、点赞的笔记</span>
        </div>
        <div className="mb-2 flex text-gray-500">
          <MessageCircle size={16} className="mr-2" />
          <span className="text-[14px] leading-[120%]">与他人更好地互动、交流</span>
        </div>
      </div>
      {/* 更多: explore guide menu */}

      <ExploreGuideMenu />
      {/* </div> */}
    </aside>
  )
}

export default Sidebar
