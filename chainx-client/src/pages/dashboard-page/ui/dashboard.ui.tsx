'use client'

import { FC } from 'react'
import styles from './dashboard.module.scss'
import { useAuth } from '@/features/tokens'
import { UserItem } from '@/entities/user'

export const Dashboard: FC = () => {
  const { isAuth } = useAuth()

  return (
    <div className={styles.root}>
      {isAuth && <UserItem data={isAuth} profile={true} />}
    </div>
  )
}
