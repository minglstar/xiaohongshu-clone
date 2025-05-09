'use client'

import { useEffect, useState } from 'react'

interface ClientSideRendererProps {
  children: React.ReactNode
}

const ClientSideRenderer: React.FC<ClientSideRendererProps> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }
  return <>{children}</>
}

export default ClientSideRenderer
