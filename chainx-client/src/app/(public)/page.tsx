import { PUBLIC_ROUTES } from '@/shared/config/routes.config'
import { redirect } from 'next/navigation'

const HomePage = () => {
  redirect(PUBLIC_ROUTES.signIn())
}

export default HomePage
