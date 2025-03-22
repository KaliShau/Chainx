'use client'

import { FC } from 'react'
import { TypeMenuItem } from '../models/menu-item.type'
import Link from 'next/link'
import styles from './side-bar.module.scss'
import { usePathname } from 'next/navigation'
import { useUser } from '@/features/tokens'
import { cn } from '@/shared/utils/classnames.utils'

export const MenuItem: FC<TypeMenuItem> = props => {
  const pathname = usePathname()

  const { user, isLoading } = useUser()

  if (props.user !== undefined) {
    if (!user === props.user) {
      return null
    }

    if (user && !props.user) {
      return null
    }
  }

  if (isLoading) {
    return <div className={styles.skeleton} />
  }

  return (
    <Link
      className={cn(styles.menuItem, {
        [styles.active]: pathname?.startsWith(props.link)
      })}
      href={props.link}
    >
      <props.icon />
      <h6>{props.title}</h6>
    </Link>
  )
}
