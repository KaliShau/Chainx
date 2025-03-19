import { User as UserItem } from '@/entities/user'
import { useUserById } from '@/features/user-by-id'
import { Error } from '@/shared/ui/error/error.ui'
import { Loader } from '@/shared/ui/loader/loader.ui'

import styles from './user.module.scss'

export const User = ({ id }: { id: string | string[] }) => {
  const { data, isError, isLoading } = useUserById(id as string)

  if (isError) {
    return <Error />
  }

  if (isLoading) {
    return <Loader />
  }

  return <div className={styles.root}>{data && <UserItem data={data} />}</div>
}
