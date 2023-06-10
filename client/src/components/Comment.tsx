import { dateFormatter } from '@/helpers/dateFormatter'

type CommentProps = {
  comment: CommentType
}
const Comment = ({ comment }: CommentProps) => {
  return (
    <>
      <div className="flex gap-8 my-2 w-full">
        {/* <div className={`w-[160px]`}>
          <img
            alt={comment?.first_name}
            src={comment?.first_name}
            className={`h-[100px] w-[100px] rounded-[50%]`}
          />
        </div> */}
        <div className={`w-full`}>
          <div className="my-2">
            <h2 className={`text-lg md:text-xl lg:text-2xl`}>
              {comment?.first_name} {comment?.last_name}
            </h2>
            <small className={``}>
              {dateFormatter(new Date(comment?.created))}
              {/* {comment?.created} */}
            </small>
          </div>

          <p>{comment?.description}</p>
        </div>
      </div>
      <span className="w-full bg-slate-400 h-[1px]" />
    </>
  )
}

export default Comment
