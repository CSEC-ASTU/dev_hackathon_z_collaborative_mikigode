import { HOST_URL } from '@/lib'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
async function refreshAccessToken(tokenObject: any) {
  try {
    const res = await fetch(`${HOST_URL}/auth/token/refresh/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        refresh: tokenObject.refresh,
      }),
    })
    const user = await res.json()
    if (res.ok && user) {
      return { ...tokenObject, ...user }
    } else if (res?.status === 401) {
      return null
    }
    return {
      ...tokenObject,
      error: 'RefreshAccessTokenError',
    }
  } catch (error) {
    return {
      ...tokenObject,
      error: 'RefreshAccessTokenError',
    }
  }
}

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const res = await fetch('http://localhost:8000/auth/token/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: credentials?.username,
            password: credentials?.password,
          }),
        })

        const user = await res.json()

        if (res.ok && user) {
          return user
        }
        return null
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: { token: any; user: any }) {
      if (user) {
        token = { ...token, ...user }
      }
      const seconds = new Date(token.exp * 1000).getSeconds()
      
      console.log(seconds)

      if (seconds > 0) {
        return token
      }
      const response = await refreshAccessToken(token)
      return response
    },

    async session({ session, token }: { session: any; token: any }) {
      session.user = token as any

      return session
    },
  },
}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
