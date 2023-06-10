'use client'

import { SessionProvider } from 'next-auth/react'
import { useState } from 'react'
import RefreshTokenHandler from './RefreshTokenHandler'
const Provider = ({ children }: { children: React.ReactNode }) => {
  const [interval, setInterval] = useState(0)
  console.log(interval)

  return (
    <SessionProvider refetchInterval={interval} refetchOnWindowFocus={true}>
      <RefreshTokenHandler setInterval={setInterval} />
      {children}
    </SessionProvider>
  )
}

export default Provider
