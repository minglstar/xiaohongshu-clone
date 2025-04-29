'use client'

import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Button } from '@/components/ui/button'

const menus = [
  {
    key: 'creator',
    label: '创作中心',
    items: ['创作服务', '直播管理', '电脑直播助手'],
  },
  {
    key: 'business',
    label: '业务合作',
    items: ['专业号', '推广合作', '蒲公英', '商家入驻', 'MCN入驻'],
  },
]

/**
 * !!!正确的事儿就应该交给正确的人来办
 * 用户菜单组件
 * 使用 HoverCard 实现悬停菜单，解决闪动问题
 */
const UserMenu = () => {
  return (
    <div className="flex items-center gap-4">
      {menus.map(menu => (
        <HoverCard key={menu.key} openDelay={0} closeDelay={100}>
          <HoverCardTrigger asChild>
            <Button
              variant="outline"
              className="rounded-full border-none bg-white px-4 py-2 text-xs text-gray-500 shadow-none hover:bg-gray-100 hover:text-gray-600 focus-visible:ring-0 data-[state=open]:bg-gray-100 data-[state=open]:text-gray-600"
            >
              {menu.label}
            </Button>
          </HoverCardTrigger>
          <HoverCardContent
            className="w-32 rounded-lg border-none bg-white p-2 shadow-lg"
            align="center"
            // sideOffset={5}
          >
            <div className="flex flex-col space-y-1">
              {menu.items.map((item, index) => (
                <button
                  key={index}
                  className="cursor-pointer rounded-md px-2 py-2 text-start text-xs text-gray-500 hover:bg-gray-50"
                >
                  {item}
                </button>
              ))}
            </div>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  )
}

export default UserMenu

//   <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
//     <DropdownMenuTrigger onMouseEnter={() => setIsOpen(true)} asChild>
// <Button
//   variant="outline"
//   className="rounded-full border-none bg-white px-4 py-2 text-xs text-gray-500 shadow-none hover:bg-gray-100 hover:text-gray-600 focus-visible:ring-0 data-[state=open]:bg-gray-100 data-[state=open]:text-gray-600"
// >
//   {title}
// </Button>
//     </DropdownMenuTrigger>
//     <DropdownMenuContent
//       className="mt-2 w-40 rounded-lg border-none bg-white p-2 shadow-lg"
//       onMouseLeave={() => setIsOpen(false)}
//       align="center"
//     >
//       <DropdownMenuGroup>
//         {items.length > 0 &&
//           items.map((item, ind) => (
//             <DropdownMenuItem
//               key={ind}
//               className="cursor-pointer rounded-md py-2 text-xs hover:bg-gray-50"
//             >
//               {item}
//             </DropdownMenuItem>
//           ))}
//       </DropdownMenuGroup>
//     </DropdownMenuContent>
//   </DropdownMenu>
// )
