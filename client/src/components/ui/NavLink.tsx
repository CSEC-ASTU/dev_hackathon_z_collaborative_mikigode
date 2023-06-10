import Link from 'next/link'
import { ReactNode } from 'react'

const NavLink = ({
  children,
  href = '',
}: {
  href?: string
  children: ReactNode
}) => {
  return (
    <li className=" drop-shadow-sm shadow-sm hover:bg-[#11998e]">
      <Link href={href} className="w-full h-full">
        <h4 className="w-full h-full p-2 py-4 ">{children}</h4>
      </Link>
    </li>
  )
}

export default NavLink
