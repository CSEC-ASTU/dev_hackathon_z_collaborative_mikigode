import { signOut } from 'next-auth/react'

export const HOST_URL = 'http://localhost:8000'

export const refreshAccessToken = async (refresh: string) => {
  const res = await fetch(`${HOST_URL}/auth/token/refresh/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${refresh}`,
    },
  })
  if (!res.ok) {
    signOut()
    return res
  }
  return await res.json()
}
