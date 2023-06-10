import { useSession } from 'next-auth/react'
import { HOST_URL } from '..'

export const useAddBlog = () => {
  const { data: sessionData, status } = useSession()
  return async (values: BlogType) => {
    const session: SessionType = sessionData as SessionType

    if (session) {
      const res = await fetch(`${HOST_URL}/blogs/add/`, {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session.user.access}`,
        },
      })
      if (!res.ok) {
        return { error: 'som error happen' }
      }
      return await res.json()
    }
  }
}

export const useAddCategory = () => {
  const { data: sessionData, status } = useSession()
  return async (values: string) => {
    const postData = { name: values }
    const session: SessionType = sessionData as SessionType

    if (session) {
      const res = await fetch(`${HOST_URL}/service/category/add/`, {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session.user.access}`,
        },
      })
      if (!res.ok) {
        return { error: 'som error happen' }
      }
      return await res.json()
    }
  }
}

export const useUpdateCategory = () => {
  const { data: sessionData, status } = useSession()
  return async (values: CategoryType) => {
    const session: SessionType = sessionData as SessionType
    if (session) {
      const res = await fetch(`${HOST_URL}/service/tag/add/`, {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session.user.access}`,
        },
      })
      if (!res.ok) {
        return { error: 'som error happen' }
      }
      return await res.json()
    }
  }
}

export const useAddTag = () => {
  const { data: sessionData, status } = useSession()
  return async (values: string) => {
    const postData = { name: values }
    const session: SessionType = sessionData as SessionType

    if (session) {
      const res = await fetch(`${HOST_URL}/service/tag/add/`, {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session.user.access}`,
        },
      })
      if (!res.ok) {
        return { error: 'som error happen' }
      }
      return await res.json()
    }
  }
}

export const useUpdateTag = () => {
  const { data: sessionData, status } = useSession()
  return async (values: TagType) => {
    const session: SessionType = sessionData as SessionType
    if (session) {
      const res = await fetch(`${HOST_URL}/service/tag/add/`, {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session.user.access}`,
        },
      })
      if (!res.ok) {
        return { error: 'som error happen' }
      }
      return await res.json()
    }
  }
}
