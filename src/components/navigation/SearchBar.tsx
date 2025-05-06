'use client'

import { cn } from '@/lib/utils'
import { Input } from '../ui/input'
import { Menu, Search } from 'lucide-react'
import { useState } from 'react'
import { Button } from '../ui/button'
import { useMediaQuery } from 'usehooks-ts'

/**
 * 小红书风格搜索栏组件
 * 实现搜索框和搜索图标的布局
 * 支持深色模式
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

  const MainSearchBar = ({ onSearch }: { onSearch?: () => void }) => {
    return (
      <div className="flex items-center justify-between gap-3 px-2">
        <Input
          variant="search"
          placeholder="搜索"
          className={cn(
            'w-full border-0 bg-transparent py-0 pr-21 pl-4 focus-visible:ring-0 focus-visible:ring-offset-0',
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
    )
  }

  //
  const MobileSearchOverlay = ({
    onSearch,
    onCancel,
  }: {
    onSearch?: () => void
    onCancel?: () => void
  }) => {
    return (
      <nav className="relative z-10 flex w-full items-center justify-between bg-rose-500">
        {/* <div className="absolute top-[72px] left-0 w-full"> */}
        <MainSearchBar onSearch={onSearch} />
        <Button className="" variant="ghost" onClick={() => setIsSearchOpen(false)}>
          <span>取消</span>
        </Button>
        {/* </div> */}
      </nav>
    )
  }

  return (
    <div className="relative w-full">
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

      {/* 搜索栏 - 在大屏幕上显示 */}
      <nav
        className={cn(
          'rounded-full bg-neutral-100 dark:bg-gray-800',
          'lg:w-[calc(32px+calc((100vw-7*32px)/6*2))]',
          'md:w-[calc(24px+calc((100vw-5*24px)/4*2))]',
          'sm:w-[calc(24px+calc((100vw-4*24px)/3*2))]',
          'hidden sm:block'
        )}
      >
        <MainSearchBar onSearch={handleSearchClick} />
      </nav>
    </div>
  )
}

export default SearchBar
