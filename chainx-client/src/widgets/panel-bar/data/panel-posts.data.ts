import { Badge, BadgePlus } from 'lucide-react'
import { TypePanelBar } from '../models/panel.bar.model'
import { PRIVATE_ROUTES } from '@/shared/config/routes.config'

export const PANEL_POSTS_DATA: TypePanelBar[] = [
  {
    icon: Badge,
    link: PRIVATE_ROUTES.postsDashboardMy(),
    title: 'My posts'
  },
  {
    icon: BadgePlus,
    link: PRIVATE_ROUTES.postsDashboardCreate(),
    title: 'Create'
  }
]
