'use client'

import { ReactNode, useState } from 'react'

const Sidebar = ({ children }: { children: ReactNode | ReactNode[] }) => {
  const [isOpened, setIsOpened] = useState(false)
  return (
    <>
      <div className="relative w-auto  bottom-0  z-20 flex items-start  ">
        <span
          className={`${
            isOpened ? 'w-screen bg-primary/20' : 'w-0 bg-primary/1'
          } h-screen  absolute z-[-1] md:hidden ease-in-out z-[10]duration-500`}
        />
        <div
          className={`${
            isOpened ? 'w-[300px]' : 'w-0'
          } fixed md:sticky  top-[88px] bottom-0   h-[calc(var(--vh,1vh)*100_-_88px)] ease-in-out z-[10] duration-500 overflow-x-hidden bg-primary`}
        >
          <nav className="w-full py-4 px-2 overflow-hidden">
            <ul className="w-full flex flex-col gap-1 ">{children}</ul>
          </nav>
        </div>
      </div>
      <button
        className={`fixed top-7 p-1  z-[300]  left-6 outline  outline-[#11998e] rounded`}
        onClick={() => setIsOpened((prev) => !prev)}
      >
        {isOpened ? '<<<' : '>>>'}
      </button>
    </>
  )
}

export default Sidebar
