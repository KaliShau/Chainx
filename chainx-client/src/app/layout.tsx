import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './styles/globals.scss'
import { ReactNode } from 'react'
import { SideBar } from '@/widgets/side-bar'
import { MainProvider } from './providers/main-provider'
import { SITE_DESCRIPTION, SITE_TITLE } from '@/shared/constants/seo.constant'

const font = Montserrat({
  variable: '--font',
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  style: 'normal',
  weight: ['300', '400', '500', '600', '700', '800']
})

export const metadata: Metadata = {
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_TITLE}`
  },
  description: SITE_DESCRIPTION
}

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang='en'>
      <head>
        <meta name='apple-mobile-web-app-title' content='Chainx' />
      </head>
      <body className={font.variable}>
        <MainProvider>
          <main>
            <button className='sideBarOpen'>|||</button>
            <SideBar />
            <section className='container-page'>{children}</section>
          </main>
        </MainProvider>
      </body>
    </html>
  )
}

export default RootLayout
