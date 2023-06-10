'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { navLinks, pageLinks } from '@/constants'
import { logo, menu, close } from '../../public/assets/index'
import SigninButton from './SigninButton'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
  const pathname = usePathname()
  return (
    <nav
      className={`sticky sm:px-16 px-6 w-full flex items-center py-5 top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          className="flex items-center gap-4"
          href={'/'}
          onClick={() => {
            setActive('')
            window.scrollTo(0, 0)
          }}
        >
          <Image
            src={logo}
            alt="logo"
            className="ml-10 md:ml-6 w-12 h-12 object-contain "
          />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Mukerem
          </p>
        </Link>
        <ul className="list-none hidden md:flex flex-row gap-4">
          {pathname === '/' &&
            navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active ? 'text-white' : 'text-secondary'
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          {pageLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active ? 'text-white' : 'text-secondary'
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <Link href={`${link.id}`}>{link.title}</Link>
            </li>
          ))}

          <SigninButton />
        </ul>
        <div className="md:hidden flex flex-1 justify-end items-center">
          <Image
            src={toggle ? close : menu}
            alt="menu"
            className="w-8 h-8 object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              toggle ? 'flex' : 'hidden'
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="flex list-none justify-end items-start flex-col gap-4">
              {pathname === '/' &&
                navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`${
                      active ? 'text-white' : 'text-secondary'
                    } hover:text-white text-[18px] font-medium cursor-pointer`}
                    onClick={() => {
                      setToggle(!toggle)
                      setActive(link.title)
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))}

              {pageLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active ? 'text-white' : 'text-secondary'
                  } hover:text-white text-[18px] font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle)
                    setActive(link.title)
                  }}
                >
                  <Link href={`${link.id}`}>{link.title}</Link>
                </li>
              ))}

              <SigninButton />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
