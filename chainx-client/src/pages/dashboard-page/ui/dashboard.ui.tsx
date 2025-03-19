'use client'

import { FC } from 'react'
import styles from './dashboard.module.scss'
import { User } from '@/entities/user'
import { useAuth } from '@/features/tokens'

export const Dashboard: FC = () => {
  const { isAuth } = useAuth()

  return (
    <div className={styles.root}>
      {isAuth && <User data={isAuth} profile={true} />}
    </div>
  )
}
