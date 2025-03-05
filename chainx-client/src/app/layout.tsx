import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './styles/globals.scss'
import { ReactNode } from 'react'
import { SideBar } from '@/widgets/sideBar'
import { MainProvider } from './providers/main-provider'

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
      <body className={font.variable}>
        <main>
          <SideBar />
          <section className='container-page'>
            <MainProvider>{children}</MainProvider>
          </section>
        </main>
      </body>
    </html>
  )
}

export default RootLayout
