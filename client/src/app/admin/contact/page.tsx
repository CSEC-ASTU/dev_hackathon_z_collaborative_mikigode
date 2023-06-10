import PageHeader from '@/components/PageHeader'

const AdminPage = async () => {
  return (
    <div className="min-h-screen bg-white backdrop-blur-sm transition-colors bg-app-transparent">
      <section
        className={`sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0`}
      >
        <div className="flex justify-center items-center w-full h-full">
          <PageHeader title="ADMIN DASHBOARD" subtitle="COMING SOON" />
        </div>
      </section>
    </div>
  )
}

export default AdminPage
