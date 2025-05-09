'use client'

import React from 'react'
import { sideMenus } from './Sidebar'
import { User } from 'lucide-react'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const bottomMenus = [
  ...sideMenus,
  {
    icon: User,
    label: '我',
    href: '/profile',
  },
]

const BottomMenuItem = ({
  icon: Icon,
  label,
  href,
  isActive,
  onClick,
}: {
  icon?: React.ElementType
  label: string
  href: string
  isActive?: boolean
  onClick?: () => void
}) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      style={{ color: '--xhsc-color-primary-label' }}
      className="flex h-[48px] grow-1 cursor-pointer items-center justify-center"
    >
      {Icon && (
        <Icon
          size={24}
          className={cn(
            isActive ? 'text-black dark:text-white' : 'text-gray-700 dark:text-gray-400'
          )}
        />
      )}
      <span className="ml-3 hidden text-[16px] sm:block">{label}</span>
    </Link>
  )
}

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
