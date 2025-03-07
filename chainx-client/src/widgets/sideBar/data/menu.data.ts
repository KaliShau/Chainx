import {
  Contact,
  KeyRound,
  LayoutDashboard,
  LogIn,
  LogOut,
  Mail,
  Sparkle
} from 'lucide-react'
import { TypeMenuItem } from '../models/menuItem.type'
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from '@/shared/config/routes.config'

export const MAIN_MENU: TypeMenuItem[] = [
  {
    icon: LayoutDashboard,
    link: PRIVATE_ROUTES.dashboard(),
    title: 'Dashboard',
    isAuth: true
  },
  {
    icon: Mail,
    link: PRIVATE_ROUTES.email(),
    title: 'Email',
    isAuth: true
  },
  {
    icon: Sparkle,
    link: PUBLIC_ROUTES.posts(),
    title: 'Posts',
    isAuth: undefined
  }
]

export const AUTH_MENU: TypeMenuItem[] = [
  {
    icon: LogIn,
    link: PUBLIC_ROUTES.signIn(),
    title: 'Sign-in',
    isAuth: false
  },
  {
    icon: KeyRound,
    link: PUBLIC_ROUTES.signUp(),
    title: 'Sign-up',
    isAuth: false
  },
  {
    icon: LogOut,
    link: PRIVATE_ROUTES.signOut(),
    title: 'Sign-out',
    isAuth: true
  }
]

export const ADDITIONAL_MENU: TypeMenuItem[] = [
  {
    icon: Contact,
    link: PUBLIC_ROUTES.aboutUs(),
    title: 'About-us',
    isAuth: undefined
  }
]
