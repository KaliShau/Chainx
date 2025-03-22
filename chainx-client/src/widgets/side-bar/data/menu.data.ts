import {
  Contact,
  KeyRound,
  LayoutDashboard,
  LogIn,
  LogOut,
  Mail,
  Newspaper,
  Sparkle
} from 'lucide-react'
import { TypeMenuItem } from '../models/menu-item.type'
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from '@/shared/config/routes.config'

export const MAIN_MENU: TypeMenuItem[] = [
  {
    icon: LayoutDashboard,
    link: PRIVATE_ROUTES.dashboard(),
    title: 'Dashboard',
    user: true
  },
  {
    icon: Mail,
    link: PRIVATE_ROUTES.messagesMy(),
    title: 'Email',
    user: true
  },
  {
    icon: Sparkle,
    link: PUBLIC_ROUTES.posts(),
    title: 'Posts',
    user: undefined
  }
]

export const AUTH_MENU: TypeMenuItem[] = [
  {
    icon: LogIn,
    link: PUBLIC_ROUTES.signIn(),
    title: 'Sign-in',
    user: false
  },
  {
    icon: KeyRound,
    link: PUBLIC_ROUTES.signUp(),
    title: 'Sign-up',
    user: false
  },
  {
    icon: LogOut,
    link: PRIVATE_ROUTES.signOut(),
    title: 'Sign-out',
    user: true
  }
]

export const ADDITIONAL_MENU: TypeMenuItem[] = [
  {
    icon: Contact,
    link: PUBLIC_ROUTES.aboutUs(),
    title: 'About-us',
    user: undefined
  }
]

export const PANELS_MENU: TypeMenuItem[] = [
  {
    icon: Newspaper,
    link: PRIVATE_ROUTES.postsPanelMy(),
    title: 'Posts-panel',
    user: true
  }
]
