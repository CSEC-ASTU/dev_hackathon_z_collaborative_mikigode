import SectionHeader from '@/components/SectionHeader'
import BlogCard from '@/components/cards/BlogCard'
import { getRelatedBlogs } from '@/lib/server-side'

type RelatedBlogsProps = {
  slug: string
}
const RelatedBlogs = async ({ slug }: RelatedBlogsProps) => {
  const blogs: BlogType[] = await getRelatedBlogs(slug)
  console.log(blogs)

  return (
    <>
      <SectionHeader
        title="Related Blogs"
        subtitle="You might also like these"
      />

      <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] auto-rows-auto gap-8 ">
        {blogs.map((blog, index) => (
          <BlogCard key={`${blog.slug}-${index}`} {...blog} index={index} />
        ))}
      </div>
    </>
  )
}

export default RelatedBlogs
