'use client'

import { User } from 'lucide-react'
import { usePathname } from 'next/navigation'
import BottomMenuItem from '../navigation/BottomMenuItem'
import { sideMenus } from './Sidebar'

const bottomMenus = [
  ...sideMenus,
  {
    icon: User,
    label: '我',
    href: '/profile',
  },
]

export const BottomMenu = () => {
  const pathname = usePathname()

  return (
    <div
      className="fixed bottom-0 w-full border-t border-gray-200 bg-white md:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="flex" style={{ color: '--xhsc-color-tertiary-label' }}>
        {bottomMenus.map(bottomMenu => (
          <div
            key={bottomMenu.href}
            className="flex h-[48px] grow-1 cursor-pointer items-center justify-center"
            style={{ color: '--xhsc-color-tertiary-label' }}
          >
            <BottomMenuItem
              key={bottomMenu.href}
              icon={bottomMenu.icon}
              label={bottomMenu.label}
              href={bottomMenu.href}
              isActive={pathname === bottomMenu.href}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
