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
 * 使用固定高度40px，模仿小红书的搜索栏设计
 */
const MainSearchBar = ({ onSearch, className }: { onSearch?: () => void; className?: string }) => {
  return (
    <div className={cn('h-[40px] rounded-full bg-neutral-100 dark:bg-gray-800', className)}>
      <div className="flex h-full items-center justify-between px-2">
        <Input
          variant="search"
          placeholder="搜索"
          className="h-[40px] border-0 bg-transparent py-0 pr-2 pl-4 focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-transparent dark:placeholder:text-gray-400"
        />
        <Search
          className="cursor-pointer text-gray-400 transition-colors hover:text-gray-600 dark:hover:text-gray-300"
          size={20}
          onClick={onSearch}
        />
      </div>
    </div>
  )
}

/**
 * 小红书风格搜索栏组件
 * 实现搜索框和搜索图标的布局
 * 支持深色模式和移动端响应式设计
 */
const SearchBar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
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
    <div className="relative w-full">
      {/* 移动端搜索图标 */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 sm:hidden">
        <div
          onClick={handleSearchClick}
          className="rounded-full p-2 text-gray-500 hover:bg-gray-200"
        >
          <Search size={20} />
        </div>
      </div>

      {/* 移动端搜索栏 */}
      {isSearchOpen && (
        <div className="fixed top-0 right-0 left-0 z-50 flex h-[72px] items-center bg-white px-4 dark:bg-gray-900">
          <div className="flex w-full items-center justify-between">
            <MainSearchBar onSearch={handleSearchClick} className="flex-1" />
            <Button variant="ghost" onClick={() => setIsSearchOpen(false)} className="ml-2 px-3">
              <span className="text-gray-500">取消</span>
            </Button>
          </div>
        </div>
      )}

      {/* 大屏幕搜索栏 */}
      <div className="hidden w-full sm:block">
        <MainSearchBar onSearch={handleSearchClick} />
      </div>
    </div>
  )
}

export default SearchBar
