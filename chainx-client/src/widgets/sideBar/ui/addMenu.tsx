'use client'

import { FC, useEffect, useState } from 'react'
import { MenuItem } from './menuItem.ui'
import { TypeMenuItem } from '../models/menuItem.type'
import styles from './sideBar.module.scss'
import { ChevronUp } from 'lucide-react'
import clsx from 'clsx'
import { localStorageAddMenu } from '@/shared/utils/localStorage.utils'

type menuData = {
  menuData: TypeMenuItem[]
}

export const AdditionalMenu: FC<menuData> = ({ menuData }) => {
  const [isVisibleAddMenu, setVisibleAddMenu] = useState(true)

  useEffect(() => {
    const savedStatus = localStorageAddMenu.get()
    setVisibleAddMenu(savedStatus)
  })

  const changeVisibleMainMenu = () => {
    const newVisibility = !isVisibleAddMenu
    setVisibleAddMenu(newVisibility)
    localStorageAddMenu.add(newVisibility)
  }

  return (
    <div className={styles.mainMenu}>
      <div className={styles.menuTitle}>
        <h5>Additional</h5>
        <button onClick={changeVisibleMainMenu}>
          <ChevronUp
            className={clsx(styles.chevron, {
              [styles.rotate]: !isVisibleAddMenu
            })}
          />
        </button>
      </div>
      <div
        className={clsx(styles.menuContent, {
          [styles.collapsed]: !isVisibleAddMenu
        })}
      >
        {menuData.map(data => (
          <MenuItem key={data.link} {...data} />
        ))}
      </div>
    </div>
  )
}
