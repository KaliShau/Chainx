'use client'

import { FC, useEffect, useState } from 'react'
import styles from './dashboard.module.scss'
import { useUser } from '@/features/tokens'
import { UserItem } from '@/entities/user'
import { Loader } from '@/shared/ui/loader/loader.ui'
import { PUBLIC_ROUTES } from '@/shared/config/routes.config'
import { redirect } from 'next/navigation'
import { useAuth } from '@/features/tokens/hooks/auth.hook'

export const Dashboard: FC = () => {
  const { user } = useUser()
  const auth = useAuth()

  if (auth) {
    return auth
  }

  return (
    <div className={styles.root}>
      {user && <UserItem data={user} profile={true} />}
    </div>
  )
}
