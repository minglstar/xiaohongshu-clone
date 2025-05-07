import ClientOnly from '@/components/ClientOnly'
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
      {/* flex flex-1 让元素在弹性容器中自动填充剩余空间，常用于自适应和等分布局 */}
      <Sidebar />
      <ChannelBar />
      <main>{children}</main>
    </ClientOnly>
  )
}
