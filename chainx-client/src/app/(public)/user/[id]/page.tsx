'use client'

import { User } from '@/pages/user-page'
import { Error } from '@/shared/ui/error/error.ui'
import { NextPage } from 'next'
import { useParams } from 'next/navigation'

const UserPage: NextPage = () => {
  const param = useParams()
  if (!param) {
    return <Error />
  }

  return <User id={param.id} />
}

export default UserPage
