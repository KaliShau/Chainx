'use client'

import { useAuth } from '@/features/tokens/hooks/auth.hook'
import { SignOut } from '@/pages/auth/sign-out-page'
import { NextPage } from 'next'

const SignOutPage: NextPage = () => {
  return <SignOut />
}

export default SignOutPage
