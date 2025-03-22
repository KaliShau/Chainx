import { useEffect, useState } from 'react'
import { useUser } from './user.hooks'
import { redirect } from 'next/navigation'
import { PUBLIC_ROUTES } from '@/shared/config/routes.config'
import { Loader } from '@/shared/ui/loader/loader.ui'
import styles from './auth.module.scss'

export const useAuth = () => {
  const { user, isLoading } = useUser()

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient || isLoading) {
    return (
      <div className={styles.root}>
        <Loader />
      </div>
    )
  }

  if (!user) {
    redirect(PUBLIC_ROUTES.signIn())
  }

  return null
}
