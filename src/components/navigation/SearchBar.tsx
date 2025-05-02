import { Input } from '../ui/input'
import { Search } from 'lucide-react'

/**
 * 小红书风格搜索栏组件
 * 实现搜索框和搜索图标的布局
 * 支持深色模式
 */
const SearchBar = () => {
  return (
    <nav className="relative flex w-1/3 items-center overflow-hidden rounded-full bg-neutral-100 dark:bg-gray-800">
      <div className="flex w-full items-center px-4">
        <Input
          variant="search"
          placeholder="搜索"
          className="w-full border-0 bg-transparent pl-0 focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-transparent dark:placeholder:text-gray-400"
        />
        <div className="ml-2 flex h-[30px] w-[30px] translate-x-2 cursor-pointer items-center justify-center">
          <Search
            className="shrink-0 text-gray-400 transition-colors hover:text-gray-600 dark:hover:text-gray-300"
            size={20}
          />
        </div>
      </div>
    </nav>
  )
}

export default SearchBar
