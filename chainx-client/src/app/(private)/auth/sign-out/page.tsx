'use client'

import withAuth from '@/app/providers/with-auth'
import { SignOut } from '@/pages/sign-out-page'
import { NextPage } from 'next'

const SignOutPage: NextPage = () => {
  return <SignOut />
}

export default withAuth(SignOutPage)
