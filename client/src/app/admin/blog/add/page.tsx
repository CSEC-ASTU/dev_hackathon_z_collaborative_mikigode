import PageHeader from '@/components/PageHeader'
import BlogForm from '@/components/forms/BlogForm'
import { getCategories, getTags } from '@/lib/server-side'

const AddBlog = async () => {
  const categories = await getCategories()
  const tags = await getTags()
  return (
    <div className={`flex flex-col gap-4 md:gap-8 `}>
      <div className={`md:container px-2 md:mx-auto md:px-auto`}>
        <PageHeader
          title="Add New Post"
          subtitle="Frequently Asked Questions Page"
        />
      </div>
      <section
        className={`sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0`}
      >
        <BlogForm categories={categories} tags={tags} isEditing={false} />
      </section>
    </div>
  )
}

export default AddBlog
