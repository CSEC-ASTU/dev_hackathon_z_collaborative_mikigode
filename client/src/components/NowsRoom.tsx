import { getBlogs } from '@/lib/server-side'
import SectionHeader from './SectionHeader'
import BlogCard from './cards/BlogCard'
import Link from 'next/link'

const NowsRoom = async () => {
  const blogs: BlogType[] = await getBlogs()

  return (
    <section
      className={`sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0`}
    >
      <span className="hash-span" id={'blog'}>
        &nbsp;
      </span>
      <SectionHeader title="News Room." subtitle="well come to my blogs" />

      <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] auto-rows-auto gap-8 ">
        {blogs.map((blog, index) => (
          <BlogCard key={`${blog.slug}-${index}`} {...blog} index={index} />
        ))}
      </div>

      <div className="flex items-center justify-center mt-8">
        <Link href={'/blog'}>
          <button className="bg-[#11998e] hover:bg-[#0c6b63] rounded p-2 px-6 shadow">
            More
          </button>
        </Link>
      </div>
    </section>
  )
}

export default NowsRoom
