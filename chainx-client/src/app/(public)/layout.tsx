import { SideBar } from '@/widgets/sideBar'
import { ReactNode } from 'react'

const PublicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <SideBar />
      {children}
    </main>
  )
}

export default PublicLayout
