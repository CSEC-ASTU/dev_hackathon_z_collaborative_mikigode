'use client'

import BlogCard from '@/components/cards/BlogCard'
import { useEffect, useState } from 'react'

const BlogList = () => {
  const [blogs, setBlogs] = useState<BlogType[]>()
  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then((resp) => resp.json())
      .then((data) => setBlogs(data))
  }, [])

  return (
    <div
      className={` px-2 md:mx-auto md:px-auto flex flex-col-reverse md:flex-row gap-4`}
    >
      <div className="w-full md:w-3/4 rounded-md px-2">
        <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] auto-rows-auto gap-8 ">
          {/* <LargeBlogCard key={`${blog.slug}-${index}`} {...blog}  /> */}
          {blogs?.map((blog, index) => (
            <BlogCard key={`${blog.slug}-${index}`} {...blog} index={index} />
          ))}
        </div>
      </div>
      <div className="w-full md:w-1/4 flex flex-col gap-1 md:gap-4"></div>
    </div>
  )
}

export default BlogList
