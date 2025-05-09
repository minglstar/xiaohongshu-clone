import ClientOnly from '@/components/ClientOnly'
import { BottomMenu } from '@/components/layout/BottomMenu'
import ChannelBar from '@/components/layout/ChannelBar'
import Navbar from '@/components/layout/Navbar'
import Sidebar from '@/components/layout/Sidebar'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClientOnly>
      <Navbar />
      <Sidebar />
      <ChannelBar />
      <BottomMenu />
      <main>{children}</main>
    </ClientOnly>
  )
}
