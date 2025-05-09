'use client'

import { Button } from '@/components/ui/button'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { cn } from '@/lib/utils'
import { ArrowUpRight } from 'lucide-react'
import MobileGuideMenu from './MobileGuideMenu'

const menus = [
  {
    key: 'creator',
    label: '创作中心',
    items: ['创作服务', '直播管理', '电脑直播助手'],
  },
  {
    key: 'business',
    label: '业务合作',
    items: ['专业号', '推广合作', '蒲公英', '商家入驻', 'MCN入驻'],
  },
]

/**
 * 桌面端悬停式导航菜单组件
 * 使用 HoverCard 实现悬停菜单，解决闪动问题
 *
 * @param {Object} props - 组件属性
 * @param {Array} props.menus - 菜单数据
 * @param {Function} props.onActionSelect - 菜单项选择回调函数
 */
interface DesktopHoverMenuProps {
  menus: Array<{
    key: string
    label: string
    items: string[]
  }>
  onActionSelect?: (category: string, item: string) => void
}

const DesktopHoverMenu = ({ menus, onActionSelect = () => {} }: DesktopHoverMenuProps) => {
  // 处理菜单项点击事件
  const handleMenuItemClick = (menuKey: string, item: string) => {
    onActionSelect(menuKey, item)
  }

  return (
    <div className="flex flex-row items-center justify-between">
      {menus.map(menu => (
        <HoverCard key={menu.key} openDelay={0} closeDelay={100}>
          <HoverCardTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                'rounded-full border-none bg-white px-4 py-2 text-[16px] text-gray-500 shadow-none hover:bg-gray-100 hover:text-gray-600 focus-visible:ring-0 data-[state=open]:bg-gray-100 data-[state=open]:text-gray-600',
                'hidden md:block'
              )}
            >
              {menu.label}
            </Button>
          </HoverCardTrigger>
          <HoverCardContent
            className="w-auto min-w-[120px] rounded-lg border-none bg-white p-2 shadow-lg"
            align="center"
            sideOffset={5}
          >
            <div className="flex flex-col space-y-1">
              {menu.items.map(item => (
                <div
                  key={item}
                  className="group flex cursor-pointer flex-row items-center justify-between rounded-md hover:bg-gray-50"
                  onClick={() => handleMenuItemClick(menu.key, item)}
                >
                  <button className="px-3 py-2 text-start text-[16px] text-gray-500">{item}</button>
                  <ArrowUpRight className="h-5 w-5 text-gray-400 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  )
}

/**
 * 用户操作导航组件
 * 根据屏幕尺寸自动切换桌面端和移动端导航菜单
 */
const UserActionNavigation = () => {
  // 处理用户操作选择
  const handleActionSelect = (category: string, item: string) => {
    console.log(`用户选择了 ${category} 类别下的 ${item} 操作`)
    // 这里可以根据不同的类别和操作项执行相应的逻辑
  }

  return (
    <div className="relative">
      <div className="absolute top-1/2 right-2 -translate-y-1/2 md:hidden">
        <MobileGuideMenu menus={menus} onActionSelect={handleActionSelect} />
      </div>
      <DesktopHoverMenu menus={menus} onActionSelect={handleActionSelect} />
    </div>
  )
}

export default UserActionNavigation
