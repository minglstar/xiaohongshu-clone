import Logo from '../navigation/Logo'
import SearchBar from '../navigation/SearchBar'
import UserMenu from '../navigation/UserMenu'

/**
 * 网站顶部导航栏组件
 * 包含Logo、搜索栏和用户菜单
 * 支持深色模式
 */
const Navbar = () => {
  return (
    <header className="z-10 flex-shrink-0 border-b border-neutral-200 bg-white py-3 dark:border-gray-800 dark:bg-gray-950">
      <div className="flex flex-row items-center justify-between gap-3 px-8 md:gap-0">
        <Logo />
        <SearchBar />
        <UserMenu />
      </div>
    </header>
  )
}

export default Navbar
