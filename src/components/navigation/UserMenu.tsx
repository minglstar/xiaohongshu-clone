'use client'

import { Button } from '@/components/ui/button'
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
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { cn } from '@/lib/utils'
import { ArrowUpRight, Menu } from 'lucide-react'
import { ModeToggle } from '../ui/mode-toggle'

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

const MobileUserMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="rounded-full p-2 text-gray-500 hover:bg-gray-200">
          <Menu size={20} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side="top"
        align="start"
        alignOffset={0}
        className="text-[0.9rem] font-light text-gray-700"
      >
        <DropdownMenuGroup>
          <DropdownMenuItem className="text-[0.6rem] text-gray-400">设置</DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-transparent focus:bg-transparent">
            <div className="flex w-full items-center justify-between gap-3">
              <span>深色模式</span>
              <ModeToggle />
            </div>
          </DropdownMenuItem>
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
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>创作中心</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                {menus[0].items.map(item => (
                  <DropdownMenuItem key={item}>{item}</DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>业务合作</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                {menus[1].items.map(item => (
                  <DropdownMenuItem key={item}>{item}</DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>帮助与客服</DropdownMenuItem>
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
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

/**
 * !!!正确的事儿就应该交给正确的人来办
 * 用户菜单组件
 * 使用 HoverCard 实现悬停菜单，解决闪动问题
 */
const UserMenu = () => {
  const showMobileMenu = () => {}

  return (
    <div className="relative">
      <div className="absolute top-1/2 right-2 -translate-y-1/2 md:hidden">
        <MobileUserMenu />
      </div>
      <div className="flex flex-row items-center justify-between">
        {menus.map(menu => (
          <HoverCard key={menu.key} openDelay={0} closeDelay={100}>
            <HoverCardTrigger asChild>
              <Button
                key={menu.label}
                variant="outline"
                className={cn(
                  'rounded-full border-none bg-white px-4 py-2 text-gray-500 shadow-none hover:bg-gray-100 hover:text-gray-600 focus-visible:ring-0 data-[state=open]:bg-gray-100 data-[state=open]:text-gray-600',
                  'hidden md:block'
                )}
              >
                {menu.label}
              </Button>
            </HoverCardTrigger>
            <HoverCardContent
              className="w-32 rounded-lg border-none bg-white p-2 shadow-lg"
              align="center"
            >
              <div className="flex flex-col space-y-1">
                {menu.items.map((item, index) => (
                  <div className="group flex cursor-pointer flex-row items-center justify-between rounded-md hover:bg-gray-50">
                    <button key={index} className="px-2 py-2 text-start text-xs text-gray-500">
                      {item}
                    </button>
                    <ArrowUpRight className="h-5 w-5 text-gray-400 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                  </div>
                ))}
              </div>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
    </div>
  )
}

export default UserMenu
