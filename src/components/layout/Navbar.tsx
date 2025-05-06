import Logo from '../navigation/Logo'
import SearchBar from '../navigation/SearchBar'
import UserMenu from '../navigation/UserMenu'

/**
 * 网站顶部导航栏组件
 * 包含Logo、搜索栏和用户菜单
 * 支持深色模式
 * 使用内容自适应高度，提高响应性和可访问性
 */
const Navbar = () => {
  return (
    <header className="flex-shrink-0 border-b border-neutral-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="flex flex-row items-center justify-between gap-2 py-3 pr-3 pl-4 md:px-4 lg:px-8">
        {/* 左侧 Logo */}
        <div className="flex-shrink-0">
          <Logo />
        </div>

        {/* 中间搜索栏 - 在大屏幕上显示 */}
        <div className="flex flex-grow justify-center">
          <SearchBar />
        </div>

        {/* 右侧用户菜单 */}
        <div className="flex-shrink-0">
          <UserMenu />
        </div>
      </div>
    </header>
  )
}

export default Navbar
