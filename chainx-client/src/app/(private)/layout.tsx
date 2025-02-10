import { ReactNode } from 'react'

const PrivateLayout = ({ children }: { children: ReactNode }) => {
  return <main>private{children}</main>
}

export default PrivateLayout
