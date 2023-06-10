import PageHeader from '@/components/PageHeader'
import { dateFormatter } from '@/helpers/dateFormatter'
import { getBlogs } from '@/lib/server-side'
import Image from 'next/image'
import Link from 'next/link'

const BlogsPage = async () => {
  const blogs: BlogType[] = await getBlogs()

  return (
    <div className="min-h-screen bg-white backdrop-blur-sm transition-colors bg-app-transparent">
      <div className={`md:container px-2 md:mx-auto md:px-auto`}>
        <PageHeader title="Blog List" subtitle="This is blog list page" />
      </div>
      <section
        className={`sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0`}
      >
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Blog Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Slug
                </th>
                <th scope="col" className="px-6 py-3">
                  Headline
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Published
                </th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog, index) => (
                <tr
                  key={`${blog.id} ${index}`}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 w-fit  py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <div className="flex gap-4 items-center py-2 w-full h-full">
                      <Link href={`/admin/blog/${blog.slug}/edit`}>
                        <Image
                          className="h-[60px] min-w-[60px] pointer rounded-md border-[1px]"
                          src={blog.thumbnail}
                          alt={`${blog.title}`}
                          width={60}
                          height={60}
                        />
                      </Link>
                      <Link href={`/admin/blog/${blog.slug}/edit`}>
                        <h3>
                          #{blog.id}
                          {' : '}
                          {blog.title}
                        </h3>
                      </Link>
                    </div>
                  </th>
                  <td className="px-6 py-4">{blog.slug}</td>
                  <td className="px-6 py-4">{blog.headline}</td>
                  <td className="px-6 py-4">{blog.category}</td>
                  <td className="px-6 py-4">
                    {dateFormatter(new Date(blog.published))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

export default BlogsPage
