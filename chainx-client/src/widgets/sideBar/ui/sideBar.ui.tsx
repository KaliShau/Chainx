'use client'

import { FC } from 'react'
import styles from './sideBar.module.scss'
import { Framer } from 'lucide-react'
import { Menu } from './menu.ui'
import { MAIN_MENU } from '../data/menu.data'

export const SideBar: FC = () => {
  return (
    <div className={styles.main}>
      <h1>
        <Framer size='40' />
        Chainx
      </h1>
      <div className={styles.mainMenu}>
        <h5>Menu</h5>
        <Menu menuData={MAIN_MENU} />
      </div>
    </div>
  )
}
