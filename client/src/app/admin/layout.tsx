'use client'

import { useSession } from 'next-auth/react'
import { ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import AdminSidebar from './AdminSidebar'
import PageHeader from '@/components/PageHeader'
export default function Admin({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full">
      <AdminSidebar />
      <div className="w-full">
        <Auth>{children}</Auth>
      </div>
    </div>
  )
}

function Auth({ children }: { children: ReactNode }) {
  const router = useRouter()

  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/')
    },
  })


  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-white backdrop-blur-sm transition-colors bg-app-transparent">
        <section
          className={`sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0`}
        >
          <div className="flex justify-center items-center w-full h-full">
            <PageHeader title="Loading..." subtitle="" />
          </div>
        </section>
      </div>
    )
  }

  return children
}
