'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Logo = () => {
  const router = useRouter()
  return (
    // href = "/explore"
    <Image
      onClick={() => router.push('/')}
      src="/images/logo.png"
      alt="Xiaohongshu"
      className="cursor-pointer"
      height={32}
      width={68}
      style={{
        objectFit: 'contain',
        maxHeight: '32px',
        width: 'auto',
      }}
    />
  )
}

export default Logo
