import { SignIn } from '@/pages-fsd/auth/sign-in-page'
import { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
  title: 'Sign in'
}

const SignInPage: NextPage = () => {
  return <SignIn />
}

export default SignInPage
