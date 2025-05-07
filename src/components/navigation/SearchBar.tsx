'use client'

import { cn } from '@/lib/utils'
import { Search } from 'lucide-react'
import { useState } from 'react'
import { useMediaQuery } from 'usehooks-ts'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

/**
 * 主搜索栏组件
 * 实现搜索框和搜索图标的布局
 * 使用固定高度(40px)的输入框，模仿小红书的搜索栏设计
 * @param onSearch 搜索回调函数
 * @param className 自定义样式类
 * @param mobile 是否为移动端样式
 */
const MainSearchBar = ({
  onSearch,
  className,
  mobile = false,
}: {
  onSearch?: () => void
  className?: string
  mobile?: boolean
}) => {
  return (
    <div
      className={cn(
        'h-[40px] w-full rounded-full bg-neutral-100 dark:bg-gray-800',
        mobile
          ? 'w-full'
          : [
              'lg:w-[calc(32px+calc((100vw-7*32px)/6*2))]',
              'md:w-[calc(24px+calc((100vw-5*24px)/4*2))]',
              'sm:w-[calc(24px+calc((100vw-4*24px)/3*2))]',
            ],
        className
      )}
    >
      <div className="flex h-full items-center justify-between gap-3 px-2">
        <Input
          variant="search"
          placeholder="搜索"
          className={cn(
            'h-[40px] w-full border-0 bg-transparent py-0 pr-21 pl-4 focus-visible:ring-0 focus-visible:ring-offset-0',
            'dark:bg-transparent dark:placeholder:text-gray-400'
          )}
        />
        <div className="mr-2 flex w-[40px] cursor-pointer items-center justify-center">
          <Search
            className="text-gray-400 transition-colors hover:text-gray-600 dark:hover:text-gray-300"
            size={20}
            onClick={onSearch}
          />
        </div>
      </div>
    </div>
  )
}

/**
 * 小红书风格搜索栏组件
 * 实现搜索框和搜索图标的布局
 * 支持深色模式
 * 支持移动端响应式设计
 * 使用固定高度和定位，避免布局跳跃问题
 */
const SearchBar = () => {
  // 添加状态管理
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  // 添加媒体查询检测
  const isMobileScreen = useMediaQuery('(max-width: 640px)')

  const handleSearchClick = () => {
    if (isMobileScreen) {
      setIsSearchOpen(true)
    } else {
      // TODO: perform search
      console.log('perform search')
    }
  }

  return (
    <nav className="relative h-[40px] w-full">
      {/* 移动端搜索图标 - 绝对定位在父容器中 */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 sm:hidden">
        <div className="flex items-center">
          <div
            onClick={handleSearchClick}
            className="rounded-full p-2 text-gray-500 hover:bg-gray-200"
          >
            <Search size={20} />
          </div>
        </div>
      </div>

      {/* 移动端搜索栏 */}
      {isSearchOpen && (
        <div
          className={cn(
            'fixed left-0 right-0 top-0 z-50 h-[72px] bg-white px-4 py-3 dark:bg-gray-900'
          )}
        >
          <div className="flex h-full flex-row items-center justify-between gap-2">
            <MainSearchBar onSearch={handleSearchClick} mobile={true} className="flex-1" />
            <Button variant="ghost" onClick={() => setIsSearchOpen(false)} className="ml-2 px-3">
              <span className="text-gray-500">取消</span>
            </Button>
          </div>
        </div>
      )}

      {/* 搜索栏 - 在大屏幕上显示 */}
      <div className="hidden h-full w-full sm:block">
        <MainSearchBar onSearch={handleSearchClick} />
      </div>
    </nav>
  )
}

export default SearchBar
