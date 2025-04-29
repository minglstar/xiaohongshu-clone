import Logo from '../navigation/Logo'
import SearchBar from '../navigation/SearchBar'
import UserMenu from '../navigation/UserMenu'

const Navbar = () => {
  return (
    <div className="z-10 w-full border-b border-neutral-200 py-3">
      <div className="flex flex-row items-center justify-between gap-3 px-8 md:gap-0">
        <Logo />
        <SearchBar />
        <UserMenu />
      </div>
    </div>
  )
}

export default Navbar
