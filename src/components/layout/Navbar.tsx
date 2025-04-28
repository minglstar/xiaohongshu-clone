import Logo from '../navigation/Logo'
import SearchBar from '../navigation/SearchBar'
import UserMenu from '../navigation/UserMenu'

export const CREATION_CENTER = ['创作服务', '直播管理', '电脑直播助手']
export const BUSINESS_COOPERATION = ['专业号', '推广合作', '蒲公英', '商家入驻', 'MCN入住']

const Navbar = () => {
  return (
    <div className="z-10 w-full border-b border-neutral-200 py-3">
      <div className="flex flex-row items-center justify-between gap-3 px-8 md:gap-0">
        <Logo />
        <SearchBar />
        <div className="flex items-center">
          <UserMenu title="创作中心" items={CREATION_CENTER} />
          <UserMenu title="业务合作" items={BUSINESS_COOPERATION} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
