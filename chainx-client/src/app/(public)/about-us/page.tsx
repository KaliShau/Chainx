import { AboutUs } from '@/pages/about-us-page'
import { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
  title: 'About us'
}

const AboutUsPage: NextPage = () => {
  return <AboutUs />
}

export default AboutUsPage
