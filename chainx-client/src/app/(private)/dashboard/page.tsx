'use client'

import withAuth from '@/app/providers/with-auth'
import { Dashboard } from '@/pages/dashboard-page'
import { Metadata, NextPage } from 'next'

const DashboardPage: NextPage = () => {
  return <Dashboard />
}

export default withAuth(DashboardPage)
