'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

const SigninButton = () => {
  const { data: session } = useSession()

  if (session && session.user) {
    return (
      <>
        <li
          className={`flex flex-col md:flex-row  hover:text-white text-[18px] font-medium cursor-pointer`}
        >
          <Link href={'/admin'} className="text-sky-600">
            Admin
          </Link>
        </li>
        <li
          className={`flex flex-col md:flex-row  hover:text-white text-[18px] font-medium cursor-pointer`}
        >
          <button onClick={() => signOut()} className="text-red-600">
            Sign Out
          </button>
        </li>
      </>
    )
  }
  return (
    <button onClick={() => signIn()} className="">
      Sign In
    </button>
  )
}

export default SigninButton
