'use client'

import { FC } from 'react'
import { MenuItem } from './menuItem.ui'
import { TypeMenuItem } from '../models/menuItem.type'
import styles from './sideBar.module.scss'

type menuData = {
  menuData: TypeMenuItem[]
}

export const Menu: FC<menuData> = ({ menuData }) => {
  return (
    <div className={styles.menu}>
      {menuData.map(data => (
        <MenuItem key={data.link} {...data} />
      ))}
    </div>
  )
}
