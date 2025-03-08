'use client'

import { useAuth } from '@/features/tokens'
import { PUBLIC_ROUTES } from '@/shared/config/routes.config'
import { Loader } from '@/shared/ui/loader/loader.ui'
import { NextPage } from 'next'
import { redirect } from 'next/navigation'
import { ComponentType, useEffect, useState } from 'react'

const withAuth = <P extends object>(
  WrappedComponent: ComponentType<P>
): NextPage<P> => {
  const AuthComponent: NextPage<P> = props => {
    const { isAuth, isLoading } = useAuth()
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
      setIsClient(true)
    }, [])

    if (!isClient || isLoading) {
      return <Loader />
    }

    if (!isAuth) {
      redirect(PUBLIC_ROUTES.signIn())
    }

    return <WrappedComponent {...props} />
  }

  return AuthComponent
}

export default withAuth
