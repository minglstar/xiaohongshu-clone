'use client'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface UserMenuProps {
  title: string
  items?: string[]
}

const UserMenu = ({ title, items = [] }: UserMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="rounded-full border-none bg-white px-4 py-2 text-xs text-gray-500 shadow-none hover:bg-gray-100 hover:text-gray-600 focus-visible:ring-0 data-[state=open]:bg-gray-100 data-[state=open]:text-gray-600"
        >
          {title}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="mt-2 w-40 rounded-lg border-none bg-white p-2 shadow-lg"
        align="center"
      >
        <DropdownMenuGroup>
          {items.length > 0 &&
            items.map((item, ind) => (
              <DropdownMenuItem
                key={ind}
                className="cursor-pointer rounded-md py-2 text-xs hover:bg-gray-50"
              >
                {item}
              </DropdownMenuItem>
            ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserMenu
