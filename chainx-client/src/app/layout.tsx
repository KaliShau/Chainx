import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './assets/styles/globals.scss'
import { ReactNode } from 'react'

const font = Montserrat({
  variable: '--font',
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  style: 'normal',
  weight: ['300', '400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Chainx',
  description: 'My app - Chainx',
}

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang='en'>
      <body className={font.variable}>{children}</body>
    </html>
  )
}

export default RootLayout
