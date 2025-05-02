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
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-4">{children}</main>
      </div>
    </div>
  )
}
