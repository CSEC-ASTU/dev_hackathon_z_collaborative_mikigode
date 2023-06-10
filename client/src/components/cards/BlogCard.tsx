import Image from 'next/image'
import Link from 'next/link'

type BlogCardProps = {
  index: number
} & BlogType

const BlogCard = ({
  index,
  title,
  description,
  tags,
  thumbnail,
  slug,
}: BlogCardProps) => {
  return (
    <div className="green-pink-gradient p-1 rounded-2xl  w-full">
      <div className="bg-primary rounded-2xl p-5">
        <div className="relative w-full h-[180px]">
          {thumbnail && (
            <Image
              src={thumbnail}
              alt="project_image"
              width={200}
              height={200}
              className="w-full h-full object-cover rounded-2xl"
            />
          )}
        </div>
        <div className="mt-5">
          <Link href={`blog/${slug}`}>
            <h3 className="text-white font-bold text-[24px]">{title}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </Link>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`tag-${tag.id}`} className={`text-[14px]`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
export default BlogCard
