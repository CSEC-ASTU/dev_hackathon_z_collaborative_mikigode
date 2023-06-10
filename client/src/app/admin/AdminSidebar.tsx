import NavLink from '@/components/ui/NavLink'
import Sidebar from '@/components/ui/Sidebar'

const AdminSidebar = () => {
  return (
    <Sidebar>
      <NavLink href="/admin/blog">Blogs</NavLink>
      <NavLink href="/admin/blog/add">Add Blog</NavLink>
      <NavLink href="/admin/contact">Contacts</NavLink>
      <NavLink href="/admin/faq">FAQs</NavLink>
    </Sidebar>
  )
}

export default AdminSidebar
