'use client'

import withAuth from '@/app/providers/withAuth'
import { UpdateUser } from '@/pages/update-user-page'
import { Error } from '@/shared/ui/error/error.ui'
import { NextPage } from 'next'
import { useParams } from 'next/navigation'

const UpdateUserPage: NextPage = () => {
  return <UpdateUser />
}

export default withAuth(UpdateUserPage)
