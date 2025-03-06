'use client'

import { FC, useState } from 'react'
import styles from './sideBar.module.scss'
import { Framer } from 'lucide-react'
import { MainMenu } from './mainMenu.ui'
import { AUTH_MENU, MAIN_MENU } from '../data/menu.data'
import { AuthMenu } from './authMenu.ui'

export const SideBar: FC = () => {
  return (
    <aside className={styles.main}>
      <h1>
        <Framer size='40' />
        Chainx
      </h1>
      <MainMenu menuData={MAIN_MENU} />
      <AuthMenu menuData={AUTH_MENU} />
    </aside>
  )
}
