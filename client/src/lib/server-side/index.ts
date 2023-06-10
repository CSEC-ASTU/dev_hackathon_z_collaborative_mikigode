import { HOST_URL } from '..'

export async function getBlogs() {
  const res = await fetch(`${HOST_URL}/blogs`, {
    next: { revalidate: 10 },
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return await res.json()
}

export async function getBlog(slug: string) {
  const res = await fetch(`${HOST_URL}/blogs/${slug}`, {
    next: { revalidate: 10 },
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return await res.json()
}
export async function getRelatedBlogs(slug: string) {
  const res = await fetch(`${HOST_URL}/blogs/${slug}/related`, {
    next: { revalidate: 10 },
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return await res.json()
}

export async function getBlogCollection() {
  const res = await fetch(`${HOST_URL}/blogs/collections/`, {
    next: { revalidate: 10 },
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return await res.json()
}

export async function getCategories() {
  const res = await fetch(`${HOST_URL}/service/category/`, {
    next: { revalidate: 10 },
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return await res.json()
}

export async function getTags() {
  const res = await fetch(`${HOST_URL}/service/tag/`, {
    next: { revalidate: 10 },
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return await res.json()
}
