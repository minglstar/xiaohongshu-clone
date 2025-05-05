import ChannelBar from '@/components/layout/ChannelBar'
import Navbar from '@/components/layout/Navbar'
import Sidebar from '@/components/layout/Sidebar'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <Navbar />
      {/* flex flex-1 让元素在弹性容器中自动填充剩余空间，常用于自适应和等分布局 */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1 overflow-y-auto p-4">
          <ChannelBar />
          <main>{children}</main>
        </div>
      </div>
    </div>
  )
}
