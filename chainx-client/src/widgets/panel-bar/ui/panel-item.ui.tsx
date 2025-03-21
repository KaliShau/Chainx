'use client'

import { FC } from 'react'
import { TypePanelBar } from '../models/panel.bar.model'
import styles from './panel-bar.module.scss'
import Link from 'next/link'
import { cn } from '@/shared/utils/classnames.utils'
import { usePathname } from 'next/navigation'

export const PanelItem: FC<{ data: TypePanelBar }> = ({ data }) => {
  const pathname = usePathname()

  return (
    <Link
      href={data.link}
      className={cn(styles.item, { [styles.active]: pathname == data.link })}
    >
      <data.icon /> {data.title}
    </Link>
  )
}
