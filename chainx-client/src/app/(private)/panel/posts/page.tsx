'use client'

import withAuth from '@/app/providers/with-auth'
import { MyPosts } from '@/pages/my-posts-page'
import { NextPage } from 'next'

const DashboardPostsPage: NextPage = () => {
  return <MyPosts />
}

export default withAuth(DashboardPostsPage)
