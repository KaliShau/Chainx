'use client'

import { FC } from 'react'
import { TypeMenuItem } from '../models/menuItem.type'
import Link from 'next/link'
import styles from './sideBar.module.scss'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'

export const MenuItem: FC<TypeMenuItem> = props => {
  const pathname = usePathname()

  return (
    <Link
      className={clsx(styles.menuItem, {
        [styles.active]: pathname?.startsWith(props.link),
      })}
      href={props.link}
    >
      <props.icon />
      <h6>{props.title}</h6>
    </Link>
  )
}
