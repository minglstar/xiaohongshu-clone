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
import { Menu } from 'lucide-react'
import { ModeToggle } from '../ui/mode-toggle'

/**
 * 移动端导航菜单组件
 * 提供移动端下拉菜单功能，包含设置、访问方式、创作中心等选项
 * 
 * @param {Object} props - 组件属性
 * @param {Array} props.menus - 菜单数据
 * @param {Function} props.onActionSelect - 菜单项选择回调函数
 */
interface MobileGuideMenuProps {
  menus: Array<{
    key: string;
    label: string;
    items: string[];
  }>;
  onActionSelect?: (category: string, item: string) => void;
}

const MobileGuideMenu = ({ menus, onActionSelect = () => {} }: MobileGuideMenuProps) => {
  // 处理菜单项点击事件
  const handleMenuItemClick = (category: string, item: string) => {
    onActionSelect(category, item);
  };

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
          <DropdownMenuItem onClick={() => handleMenuItemClick('access', '键盘快捷键')}>
            键盘快捷键
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleMenuItemClick('access', '添加小红书到桌面')}>
            添加小红书到桌面
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleMenuItemClick('access', '打开小窗模式')}>
            打开小窗模式
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>创作中心</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                {menus[0].items.map(item => (
                  <DropdownMenuItem 
                    key={item} 
                    onClick={() => handleMenuItemClick('creator', item)}
                  >
                    {item}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>业务合作</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                {menus[1].items.map(item => (
                  <DropdownMenuItem 
                    key={item} 
                    onClick={() => handleMenuItemClick('business', item)}
                  >
                    {item}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => handleMenuItemClick('support', '帮助与客服')}>
            帮助与客服
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>隐私 协议</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem onClick={() => handleMenuItemClick('privacy', '1')}>
                  1
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleMenuItemClick('privacy', '2')}>
                  2
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => handleMenuItemClick('privacy', '3...')}>
                  3...
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>关于小红书</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem onClick={() => handleMenuItemClick('about', '1')}>
                  1
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleMenuItemClick('about', '2')}>
                  2
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => handleMenuItemClick('about', '3...')}>
                  3...
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default MobileGuideMenu