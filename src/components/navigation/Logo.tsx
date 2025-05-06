'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Logo = () => {
  const router = useRouter()
  return (
    <Image
      onClick={() => router.push('/')}
      src="/images/logo.png"
      alt="Xiaohongshu"
      className="cursor-pointer"
      height={32}
      width={68}
    />
  )
}

export default Logo
