'use client'

import { cn } from '@/lib/utils'
import { Search, X } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { useMediaQuery } from 'usehooks-ts'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

/**
 * 主搜索栏组件
 * 实现搜索框和搜索图标的布局
 * 使用固定高度40px，模仿小红书的搜索栏设计
 */
const MainSearchField = ({
  onSearch,
  className,
  value,
  onChange,
}: {
  onSearch?: (value: string) => void
  className?: string
  value?: string
  onChange?: (value: string) => void
}) => {
  // 使用内部状态或外部传入的状态
  const [inputValue, setInputValue] = useState(value || '')

  // 当外部value改变时更新内部状态
  useEffect(() => {
    if (value !== undefined) {
      setInputValue(value)
    }
  }, [value])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setInputValue(newValue)
    if (onChange) {
      onChange(newValue)
    }
  }

  const handleClear = () => {
    setInputValue('')
    if (onChange) {
      onChange('')
    }
  }

  const handleSearch = () => {
    if (onSearch) {
      onSearch(inputValue)
    }
  }

  return (
    <div className={cn(className)}>
      {/* 输入框 */}
      <Input
        variant="search"
        placeholder="搜索"
        autoComplete="off"
        spellCheck="false"
        className="h-[40px] w-full rounded-full bg-neutral-100 py-0 pr-21 pl-4 text-[16px] leading-[120%] text-gray-700 caret-red-500"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={e => e.key === 'Enter' && handleSearch()}
      />
      {/* 执行清空,搜索 */}
      <div className="absolute top-0 right-0 flex h-full items-center justify-center text-gray-500">
        {inputValue.length > 0 && (
          <div
            className="mr-1 flex h-full w-[40px] cursor-pointer items-center justify-center text-gray-500"
            onClick={handleClear}
            aria-label="清空搜索"
          >
            <X size={20} />
          </div>
        )}
        <div
          className="mr-1 flex h-full w-[40px] cursor-pointer items-center justify-center text-gray-500"
          onClick={handleSearch}
          aria-label="搜索"
        >
          <Search size={20} />
        </div>
      </div>
    </div>
  )
}

/**
 * 小红书风格搜索栏组件
 * 实现搜索框和搜索图标的布局
 * 支持深色模式和移动端响应式设计
 * 支持搜索框展开模式，完全替换导航栏内容
 */
interface SearchFieldProps {
  isSearchOpen?: boolean
  onSearchOpen?: () => void
  onSearchClose?: () => void
  onSearch?: (value: string) => void
}

const SearchField = ({ isSearchOpen, onSearchOpen, onSearchClose, onSearch }: SearchFieldProps) => {
  const [localSearchOpen, setLocalSearchOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const isMobileScreen = useMediaQuery('(max-width: 768px)')

  // 使用外部传入的状态或内部状态
  const searchOpen = isSearchOpen !== undefined ? isSearchOpen : localSearchOpen

  // 监听屏幕宽度变化，当从小屏幕变为大屏幕时自动关闭搜索弹窗
  useEffect(() => {
    if (!isMobileScreen && searchOpen) {
      if (onSearchClose) {
        onSearchClose()
      } else {
        setLocalSearchOpen(false)
      }
    }
  }, [isMobileScreen, searchOpen, onSearchClose])

  // 统一处理搜索逻辑
  const handleSearch = useCallback(
    (value: string) => {
      if (!value.trim()) return

      if (onSearch) {
        onSearch(value)
      } else {
        // 默认搜索行为，可以实现跳转到搜索页面等功能
        console.log('执行搜索:', value)
      }

      // 搜索后可以选择关闭搜索框
      if (searchOpen && isMobileScreen) {
        handleSearchClose()
      }
    },
    [onSearch, searchOpen, isMobileScreen]
  )

  const handleSearchClick = () => {
    if (isMobileScreen) {
      if (onSearchOpen) {
        onSearchOpen()
      } else {
        setLocalSearchOpen(true)
      }
    } else {
      // 大屏幕直接执行搜索
      handleSearch(searchValue)
    }
  }

  const handleSearchClose = () => {
    if (onSearchClose) {
      onSearchClose()
    } else {
      setLocalSearchOpen(false)
    }
  }

  // 搜索框展开状态
  if (searchOpen) {
    return (
      <div className="relative flex w-full items-center">
        <MainSearchField
          onSearch={handleSearch}
          className="relative w-full"
          value={searchValue}
          onChange={setSearchValue}
        />
        <Button
          variant="ghost"
          onClick={handleSearchClose}
          className="ml-3 !h-[40px] rounded-full bg-transparent px-4 text-[16px] leading-[120%]"
        >
          <span className="text-gray-500">取消</span>
        </Button>
      </div>
    )
  }

  // 正常状态
  return (
    <>
      <div
        className={cn(
          'fixed left-1/2 h-[40px] -translate-x-1/2',
          'w-0 overflow-hidden md:w-[calc(40vw-23px)]'
        )}
      >
        {/* 大屏幕搜索栏 */}
        <MainSearchField onSearch={handleSearch} value={searchValue} onChange={setSearchValue} />
      </div>
      {/* 移动端搜索图标 */}
      <div className="absolute top-1/2 right-20 -translate-y-1/2 md:hidden">
        <div
          onClick={handleSearchClick}
          className="rounded-full p-2 text-gray-500 hover:bg-gray-200"
        >
          <Search size={20} />
        </div>
      </div>
    </>
  )
}

export default SearchField
