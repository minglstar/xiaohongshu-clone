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
import { Menu } from 'lucide-react'
import { ModeToggle } from '../ui/mode-toggle'

/**
 * 探索指南菜单组件
 * 显示在侧边栏底部的更多选项菜单
 * 包含关于、隐私协议、帮助等选项
 */
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

export default ExploreGuideMenu