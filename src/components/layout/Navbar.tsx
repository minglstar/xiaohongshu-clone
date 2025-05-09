'use client'

import { cn } from '@/lib/utils'
import { useState } from 'react'
import Logo from '../navigation/Logo'
import SearchField from '../navigation/SearchField'
import UserActionDropdown from '../navigation/UserActionDropdown'

/**
 * 网站顶部导航栏组件
 * 包含Logo、搜索栏和用户菜单
 * 支持深色模式
 * 完全模仿小红书的导航栏设计
 * 支持搜索框展开时替换整个导航栏内容
 */
const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const handleSearch = (value: string) => {
    // 这里可以实现搜索逻辑，例如跳转到搜索结果页面
    console.log('在Navbar中执行搜索:', value)
    // 可以选择关闭搜索框
    setIsSearchOpen(false)
  }

  return (
    <div
      className={cn(
        'fixed top-0 left-0 z-10 flex h-[72px] w-full flex-col items-center justify-center'
      )}
    >
      <header
        className={cn(
          'relative z-10 flex h-full w-full max-w-[2520px] items-center justify-between bg-white px-8',
          'border-b border-neutral-200',
          'dark:border-gray-800 dark:bg-gray-950'
        )}
      >
        {!isSearchOpen ? (
          <>
            <Logo />
            <SearchField onSearchOpen={() => setIsSearchOpen(true)} onSearch={handleSearch} />
            <UserActionDropdown />
          </>
        ) : (
          <SearchField
            isSearchOpen={isSearchOpen}
            onSearchClose={() => setIsSearchOpen(false)}
            onSearch={handleSearch}
          />
        )}
      </header>
    </div>
  )
}

export default Navbar
