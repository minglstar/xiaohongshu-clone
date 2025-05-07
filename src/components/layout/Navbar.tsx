import Logo from '../navigation/Logo'
import SearchBar from '../navigation/SearchBar'
import UserMenu from '../navigation/UserMenu'

/**
 * 网站顶部导航栏组件
 * 包含Logo、搜索栏和用户菜单
 * 支持深色模式
 * 使用固定高度(72px)，模仿小红书的导航栏设计
 */
const Navbar = () => {
  return (
    <header className="flex-shrink-0 border-b border-neutral-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="flex h-[72px] flex-row items-center justify-between gap-2 px-4 md:px-4 lg:px-8">
        {/* 左侧 Logo */}
        <Logo />

        {/* 中间搜索栏 - 在大屏幕上显示 */}
        <SearchBar />

        {/* 右侧用户菜单 */}
        <UserMenu />
      </div>
    </header>
  )
}

export default Navbar
