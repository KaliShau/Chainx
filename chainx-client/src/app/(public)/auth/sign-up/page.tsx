import { SignUp } from '@/pages/sign-up-page'
import { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
  title: 'Sign up'
}

const SignUpPage: NextPage = () => {
  return <SignUp />
}

export default SignUpPage
