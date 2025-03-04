import {
  KeyRound,
  LayoutDashboard,
  LogIn,
  LogOut,
  Mail,
  Sparkle,
} from 'lucide-react'
import { TypeMenuItem } from '../models/menuItem.type'
import ROUTES from '@/shared/config/routes.config'

export const MAIN_MENU: TypeMenuItem[] = [
  {
    icon: LayoutDashboard,
    link: ROUTES.dashboardLink,
    title: ROUTES.dashboardName,
    isAuth: true,
  },
  {
    icon: Mail,
    link: ROUTES.emailLink,
    title: ROUTES.emailName,
    isAuth: true,
  },
  {
    icon: Sparkle,
    link: ROUTES.postsLink,
    title: ROUTES.postsName,
    isAuth: undefined,
  },
]

export const AUTH_MENU: TypeMenuItem[] = [
  {
    icon: LogIn,
    link: ROUTES.signInLink,
    title: ROUTES.signInName,
    isAuth: false,
  },
  {
    icon: KeyRound,
    link: ROUTES.signUpLink,
    title: ROUTES.signUpName,
    isAuth: false,
  },
  {
    icon: LogOut,
    link: ROUTES.signOutLink,
    title: ROUTES.signOutName,
    isAuth: true,
  },
]
