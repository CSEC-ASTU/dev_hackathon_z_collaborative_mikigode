import { getBlog, getBlogCollection, getBlogs } from '@/lib/server-side'
import Image from 'next/image'
import RelatedBlogs from './RelatedBlogs'
import PageHeader from '@/components/PageHeader'
import Accordion from '@/components/ui/Accordion'
import Link from 'next/link'
import Comment from '@/components/Comment'
import CommentForm from '@/components/forms/CommentForm'
import SectionHeader from '@/components/SectionHeader'
import { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: { blogSlug: string }
}

export async function generateMetadata(
  { params: { blogSlug } }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const blog: BlogType = await getBlog(blogSlug)
  const previousImages = (await parent).openGraph?.images || []
  return {
    title: blog.title,
    description: blog.description,
    keywords: blog.tags.map((tag) => tag.name),
    openGraph: {
      images: [blog.thumbnail, ...previousImages],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.description,
      images: [blog.thumbnail],
    },
  }
}

const BlogPage = async ({ params: { blogSlug } }: Props) => {
  const blog: BlogDetailType = await getBlog(blogSlug)
  const collection: CollectionType = await getBlogCollection()
  let body: string | TrustedHTML = blog.body as string | TrustedHTML

  return (
    <div className="min-h-screen bg-white backdrop-blur-sm transition-colors bg-app-transparent">
      <section
        className={`sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0`}
      >
        <div
          className={` px-2 md:mx-auto md:px-auto flex flex-col md:flex-row gap-4`}
        >
          <div className="w-full md:w-2/3 rounded-md px-2">
            <div className={`pb-16  px-2 md:mx-auto md:px-auto`}>
              <PageHeader title={blog.title} subtitle={blog.headline} />
              <p>{blog.description}</p>
            </div>

            <div
              className={`w-full flex justify-center items-center  px-2 md:mx-auto md:px-auto`}
            >
              <Image
                src={blog.thumbnail}
                width={800}
                height={360}
                alt={'blogSlug'}
                className="object-cover"
              />
            </div>
            <div
              className={`w-full prose lg:prose-xl `}
              dangerouslySetInnerHTML={{ __html: body }}
            />
          </div>
          <div className="w-full md:w-1/3 flex flex-col gap-1 my-16">
            <Accordion
              className="rounded-md bg-primary "
              accordionSummary="Pin"
              accordionDetails={
                <ul className={`flex flex-col gap-2 my-2`}>
                  {collection?.recent_blogs?.map((blog) => (
                    <li key={`blogs-${blog.slug}`} className=" py-1">
                      <Link
                        href={`/blog/${blog.slug}`}
                        className={`hover:text-green-400 flex justify-between items-center`}
                      >
                        {blog.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              }
            />
            <Accordion
              className="rounded-md bg-primary "
              accordionSummary="Recent Posts"
              accordionDetails={
                <ul className={`flex flex-col gap-2 my-2`}>
                  {collection?.recent_blogs?.map((blog) => (
                    <li key={`blogs-${blog.slug}`} className=" py-1">
                      <Link
                        href={`/blog/${blog.slug}`}
                        className={`hover:text-green-400 flex justify-between items-center`}
                      >
                        {blog.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              }
            />
          </div>
        </div>
        <div className={`w-full md:px-auto my-8`}>
          <div className={`flex flex-col gap-4 w-full max-w-3xl`}>
            <SectionHeader title="Comment" subtitle="" />
            {blog?.comments.map((comment, index) => (
              <Comment key={`comment-${index}`} comment={comment} />
            ))}
            <CommentForm />
          </div>
        </div>

        <RelatedBlogs slug={blogSlug} />
      </section>
    </div>
  )
}

export async function getStaticPaths() {
  const blogs: BlogType[] = await getBlogs()
  const paths = blogs.map((blog) => ({ params: { blogSlug: blog.slug } }))
  return { paths, fallback: 'blocking' }
}
export default BlogPage
