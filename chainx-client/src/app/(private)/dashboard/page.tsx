'use client'

import withAuth from '@/app/providers/withAuth'
import { Dashboard } from '@/pages/dashboard-page'
import { Metadata, NextPage } from 'next'

const DashboardPage: NextPage = () => {
  return <Dashboard />
}

export default withAuth(DashboardPage)
