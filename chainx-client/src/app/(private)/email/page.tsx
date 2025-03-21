'use client'

import withAuth from '@/app/providers/with-auth'
import { NextPage } from 'next'

const EmailPage: NextPage = () => {
  return <p>Email</p>
}

export default withAuth(EmailPage)
