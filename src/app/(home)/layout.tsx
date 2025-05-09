'use client'

import ClientSideRenderer from '@/components/common/ClientSideRenderer'
import { BottomMenu } from '@/components/layout/BottomMenu'
import Navbar from '@/components/layout/Navbar'
import Sidebar from '@/components/layout/Sidebar'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClientSideRenderer>
      <Navbar />
      <Sidebar />
      <BottomMenu />
      <main>{children}</main>
    </ClientSideRenderer>
  )
}
