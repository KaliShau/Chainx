'use client'

import withAuth from '@/app/providers/with-auth'
import { CreatePostPage } from '@/pages/create-post-page'
import { NextPage } from 'next'

const DashboardPostsCreatePage: NextPage = () => {
  return <CreatePostPage />
}

export default withAuth(DashboardPostsCreatePage)
