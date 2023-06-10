import React, { useRef } from 'react'

type ModelProps = {
  children: React.JSX.Element
  openModel: boolean
  setOpenModel: React.Dispatch<React.SetStateAction<boolean>>
  modelTitle: string
  width?: string
}
const Model = ({
  children,
  openModel,
  setOpenModel,
  modelTitle,
  width,
}: ModelProps) => {
  const modelRef = useRef<HTMLDivElement>()

  const handleClose = (e: React.MouseEvent<HTMLDivElement>): void => {
    const dialogDimensions = modelRef.current?.getBoundingClientRect()
    if (typeof dialogDimensions !== 'undefined') {
      if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
      ) {
        setOpenModel(false)
      }
    }
  }
  const getWidth = () => {
    switch (width) {
      case 'lg':
        return 1024
      case 'md':
        return 768
      case 'sm':
        return 640
      case 'xs':
        return 460
      default:
        return 640
    }
  }

  return (
    <div
      className={`${openModel ? 'fixed ' : 'hidden'} bg-black/50
        w-full  left-0 top-0 justify-center items-center
        overflow-y-auto min-h-screen grid h-screen place-items-center
        pt-[60px] ease-in-out z-[100]`}
      onClick={handleClose}
    >
      <div
        ref={modelRef as React.MutableRefObject<HTMLDivElement>}
        style={{
          width: getWidth(),
          // marginTop: `calc(var(--vh,1vh)*50 - ${
          //   modelRef.current &&
          //   modelRef.current?.getBoundingClientRect().height / 2
          // }px)`,
        }}
        className={`h-fit bg-primary mx-auto my-auto max-w-[90%] rounded-lg outline outline-1`}
      >
        <div className="px-4 py-4 flex justify-between items-center ease-in-out">
          <h1 className={`text-xl md:text-2xl  text-left my-4`}>
            {modelTitle}
          </h1>
          <div>
            <button
              onClick={() => setOpenModel(false)}
              className="rounded-full flex justify-center items-center w-8 h-8"
            >
              X
            </button>
          </div>
        </div>
        <div className="px-4 pb-8">{children}</div>
      </div>
    </div>
  )
}

export default Model
