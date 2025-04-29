'use client'

import {
  Bell,
  ChevronDown,
  Home,
  PlusSquare,
  ThumbsUp,
  Sprout,
  Star,
  MessageCircle,
} from 'lucide-react'
import Container from '../Container'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'

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
          'flex items-center justify-between rounded-full px-4 py-3 transition-colors',
          isActive ? 'bg-gray-100 font-medium' : 'text-gray-700 hover:bg-gray-50'
        )}
      >
        <div className="flex items-center gap-3">
          {/* 图标和文本的容器 */}
          {/* 条件渲染图标 */}
          {Icon && <Icon size={20} className={isActive ? 'text-black' : 'text-gray-700'} />}
          {/* 文本 */}
          <span className={isActive ? 'font-medium' : ''}>{label}</span>
        </div>
        {hasChildren && <ChevronDown size={16} className="text-gray-600" />}
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
    <div className="mt-4 space-y-4">
      <Button className="w-full rounded-full bg-red-500 py-6 text-white hover:bg-red-600">
        登录
      </Button>
      <div className="shadow:sm rounded-xl border-[1px] border-gray-200 p-2 text-[0.9rem] text-gray-500">
        <p className="m-[2px] pl-1 text-black">马上登录即可</p>
        <ul>
          <li className="flex items-center">
            <ThumbsUp size={20} className="m-[2px] p-1" />
            <span>刷到更懂你的优质内容</span>
          </li>
          <div className="flex items-center">
            <Sprout size={20} className="m-[2px] p-1" />
            <li>搜索最新种草、拔草信息</li>
          </div>
          <div className="flex items-center">
            <Star size={20} className="m-[2px] p-1" />
            <li>查看收藏、点赞的笔记</li>
          </div>
          <div className="flex items-center">
            <MessageCircle size={20} className="m-[2px] p-1" />
            <li>与他人更好地互动、交流</li>
          </div>
        </ul>
      </div>
    </div>
  )
}

const FooterNav = ({ onItemClick }: { onItemClick?: () => void }) => {
  return <>// dripmenu 向上drop</>
}

const Sidebar = () => {
  return (
    <Container>
      <div className="w-55">
        <MainNav />
        <LoginPrompt />
      </div>
    </Container>
  )
}

export default Sidebar
