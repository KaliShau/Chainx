import { SignIn } from '@/pages/sign-in-page'
import { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
  title: 'Sign in'
}

const SignInPage: NextPage = () => {
  return <SignIn />
}

export default SignInPage
