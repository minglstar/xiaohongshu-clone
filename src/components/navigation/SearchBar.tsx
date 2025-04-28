import { Input } from '../ui/input'
import { Search } from 'lucide-react'

/**
 * 小红书风格搜索栏组件
 * 实现搜索框和搜索图标的布局
 */
const SearchBar = () => {
  return (
    // 响应式UI
    // TODO: >xl
    <div className="relative flex w-1/3 items-center rounded-full bg-neutral-100">
      <div className="flex w-full items-center px-4">
        <Input variant="search" placeholder="搜索" className="w-full bg-transparent pl-0" />
        <div className="ml-2 flex h-[30px] w-[30px] translate-x-[5px] transform cursor-pointer items-center justify-center">
          <Search
            className="shrink-0 text-gray-400 transition-colors hover:text-gray-600"
            size={20}
          />
        </div>
      </div>
    </div>
  )
}

export default SearchBar
