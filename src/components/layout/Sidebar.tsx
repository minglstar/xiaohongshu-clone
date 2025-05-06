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
import {
  Bell,
  ChevronDown,
  Home,
  Menu,
  MessageCircle,
  PlusSquare,
  Sprout,
  Star,
  ThumbsUp,
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'
import { ModeToggle } from '../ui/mode-toggle'

const mainNaviItems = [
  {
    icon: Home,
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

const SidebarItem = ({
  icon: Icon,
  label,
  href,
  isActive,
  hasChildren,
  onClick,
}: {
  icon?: React.ElementType // 可选的图标组件
  label: string // 导航项文本
  href: string // 导航项链接
  isActive?: boolean // 是否为当前活动项
  hasChildren?: boolean // 是否有子菜单
  onClick?: () => void // 点击事件处理函数
}) => {
  return (
    <li>
      <Link
        href={href}
        onClick={onClick}
        className={cn(
          'flex items-center justify-between rounded-full px-4 py-3 leading-tight font-semibold transition-colors',
          isActive
            ? 'bg-gray-100 font-medium dark:bg-gray-800'
            : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800'
        )}
      >
        <div className="flex items-center gap-3">
          {/* 图标和文本的容器 */}
          {/* 条件渲染图标 */}
          {Icon && (
            <Icon
              size={20}
              className={
                isActive ? 'text-black dark:text-white' : 'text-gray-700 dark:text-gray-400'
              }
            />
          )}
          {/* 文本 */}
          <span className={isActive ? 'font-medium' : ''}>{label}</span>
        </div>
        {hasChildren && <ChevronDown size={20} className="text-gray-600 dark:text-gray-400" />}
      </Link>
    </li>
  )
}

/**
 * 主导航组件
 */
const MainNav = ({ onItemClick }: { onItemClick?: () => void }) => {
  const pathname = usePathname()

  return (
    <ul className="space-y-1">
      {mainNaviItems.map(naviItem => (
        <SidebarItem
          key={naviItem.href}
          icon={naviItem.icon}
          label={naviItem.label}
          href={naviItem.href}
          isActive={pathname === naviItem.href}
          onClick={onItemClick}
        />
      ))}
    </ul>
  )
}

const LoginPrompt = () => {
  return (
    <div className="mt-2 space-y-2">
      <Button className="h-[48px] w-full rounded-full bg-red-500 py-0 text-[1rem] font-semibold text-white hover:bg-red-600">
        登录
      </Button>
      <div
        className={cn(
          'shadow:sm rounded-xl border-[1px] border-gray-200 p-3 text-[0.8rem] text-gray-500',
          'dark:border-gray-700 dark:text-gray-400'
        )}
      >
        <p className="text-gray-900 dark:text-gray-300">马上登录即可</p>
        <ul className="font-normal">
          <li className="flex items-center">
            <ThumbsUp size={14} />
            <span className="ml-0.5 p-0.5">刷到更懂你的优质内容</span>
          </li>
          <li className="flex items-center">
            <Sprout size={14} />
            <span className="ml-0.5 p-0.5">搜索最新种草、拔草信息</span>
          </li>
          <li className="flex items-center">
            <Star size={14} />
            <span className="ml-0.5 p-0.5">查看收藏、点赞的笔记</span>
          </li>
          <li className="flex items-center">
            <MessageCircle size={14} />
            <span className="ml-0.5 p-0.5">与他人更好地互动、交流</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

const FooterNav = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={cn(
            'flex w-full items-center justify-between rounded-full px-4 py-3 text-[1rem] leading-tight font-semibold transition-colors',
            'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800'
          )}
        >
          <div className="flex items-center gap-3">
            <Menu size={16} className="text-gray-700 dark:text-gray-400" />
            <span>更多</span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side="top"
        align="start"
        alignOffset={0}
        className="w-[calc(16px+calc((100vw-7*32px)/6*1))] text-[0.9rem] font-light text-gray-500"
      >
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>关于小红书</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>1</DropdownMenuItem>
                <DropdownMenuItem>2</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>3...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>隐私 协议</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>1</DropdownMenuItem>
                <DropdownMenuItem>2</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>3...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>帮助与客服</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="text-[0.6rem] text-gray-400">访问方式</DropdownMenuItem>
          <DropdownMenuItem>键盘快捷键</DropdownMenuItem>
          <DropdownMenuItem>添加小红书到桌面</DropdownMenuItem>
          <DropdownMenuItem>打开小窗模式</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="text-[0.6rem] text-gray-400">设置</DropdownMenuItem>
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
  return (
    <aside
      className={cn(
        'ml-4 hidden h-full flex-shrink-0 overflow-hidden border-r border-gray-100 bg-white md:block dark:border-gray-800 dark:bg-gray-950'
        // 'w-[calc(16.67vw - 21.33px)]'
      )}
    >
      <div className="flex h-full flex-col">
        <div className="w-full pt-2">
          <MainNav />
          <LoginPrompt />
        </div>
        <div className="mt-auto mb-4 w-full">
          <FooterNav />
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
