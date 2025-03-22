'use client'

import { useUserById } from '@/features/users'
import { Error } from '@/shared/ui/error/error.ui'
import { Loader } from '@/shared/ui/loader/loader.ui'

import styles from './user.module.scss'
import { UserItem } from '@/entities/user'
import { useParams } from 'next/navigation'

export const User = () => {
  const param = useParams()
  if (!param) {
    return <Error />
  }
  const { data, isError, isLoading } = useUserById(param.id as string)

  if (isError) {
    return <Error />
  }

  if (isLoading) {
    return <Loader />
  }

  return <div className={styles.root}>{data && <UserItem data={data} />}</div>
}
