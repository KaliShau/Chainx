import { Dashboard } from '@/pages-fsd/users/dashboard-page'
import { Metadata, NextPage } from 'next'
import { NO_INDEX_PAGE } from '@/shared/constants/seo.constant'

export const metadata: Metadata = {
  title: 'Dashboard',
  ...NO_INDEX_PAGE
}

const DashboardPage: NextPage = () => {
  return <Dashboard />
}

export default DashboardPage
