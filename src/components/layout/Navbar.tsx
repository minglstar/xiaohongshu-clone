import Logo from '../navigation/Logo'
import SearchBar from '../navigation/SearchBar'
import UserMenu from '../navigation/UserMenu'

/**
 * 网站顶部导航栏组件
 * 包含Logo、搜索栏和用户菜单
 * 支持深色模式
 * 完全模仿小红书的导航栏设计
 */
const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 z-10 flex h-[72px] w-full flex-col items-center justify-center border-b border-neutral-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="flex w-full items-center justify-between px-4 md:px-6 lg:px-8">
        {/* 左侧 Logo */}
        <Logo />

        {/* 中间搜索栏 */}
        <div className="flex-1 px-4">
          <SearchBar />
        </div>

        {/* 右侧用户菜单 */}
        <UserMenu />
      </div>
    </header>
  )
}

export default Navbar
