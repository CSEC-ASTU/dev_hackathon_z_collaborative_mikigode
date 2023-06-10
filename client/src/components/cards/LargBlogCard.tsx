import Image from 'next/image'
import Link from 'next/link'

const LargeBlogCard = ({
  title,
  description,
  tags,
  thumbnail,
  slug,
}: BlogType) => {
  return (
    <div className="h-fit green-pink-gradient p-1 rounded-2xl  w-full">
      <div className=" bg-primary rounded-2xl p-5 flex flex-col md:flex-row first-letter: gap-4">
        <Image
          src={thumbnail}
          alt="project_image"
          width={400}
          height={300}
          className="w-full h-full min-h-[260px]  object-cover rounded-2xl"
        />

        <div className="w-full h-full">
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
    </div>
  )
}

export default LargeBlogCard
