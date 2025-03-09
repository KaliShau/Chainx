'use client'

import { Error } from '@/shared/ui/error/error.ui'
import { NextPage } from 'next'
import { useParams } from 'next/navigation'

const UserPage: NextPage = () => {
  const param = useParams()
  if (!param) {
    return <Error />
  }

  return <div>fff</div>
}

export default UserPage
