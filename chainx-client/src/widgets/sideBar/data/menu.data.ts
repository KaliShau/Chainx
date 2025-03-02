import { LayoutDashboard, Mail, Sparkle } from 'lucide-react'
import { TypeMenuItem } from '../models/menuItem.type'
import ROUTES from '@/shared/config/routes.config'

export const MAIN_MENU: TypeMenuItem[] = [
  {
    icon: LayoutDashboard,
    link: ROUTES.dashboardLink,
    title: ROUTES.dashboardName,
  },
  {
    icon: Mail,
    link: ROUTES.emailLink,
    title: ROUTES.emailName,
  },
  {
    icon: Sparkle,
    link: ROUTES.postsLink,
    title: ROUTES.postsName,
  },
]
