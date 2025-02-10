import { ReactNode } from 'react'

const PublicLayout = ({ children }: { children: ReactNode }) => {
  return <main>public{children}</main>
}

export default PublicLayout
