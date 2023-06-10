import { getBlog } from '@/lib/server-side'
import BlogForm from '@/components/forms/BlogForm'
import PageHeader from '@/components/PageHeader'

type Props = {
  params: { blogSlug: string }
}

async function EditBlog({ params: { blogSlug } }: Props) {
  const blog: BlogType = await getBlog(blogSlug)


  return (
    <div className={`flex flex-col gap-4 md:gap-8 `}>
      <div className={`md:container px-2 md:mx-auto md:px-auto`}>
        <PageHeader
          title="Edit Blog Post"
          subtitle="Frequently Asked Questions Page"
        />
      </div>
      <section
        className={`sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0`}
      >
        <BlogForm
          isEditing={true}
          blog={blog}
        />
      </section>
    </div>
  )
}

export default EditBlog
