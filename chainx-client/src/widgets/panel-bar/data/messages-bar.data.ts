import {
  MessageSquarePlus,
  MessageSquareReply,
  MessageSquareShare,
  MessagesSquare
} from 'lucide-react'
import { TypePanelBar } from '../models/panel.bar.model'
import { PRIVATE_ROUTES } from '@/shared/config/routes.config'

export const MESSAGES_BAR_DATA: TypePanelBar[] = [
  {
    icon: MessageSquareShare,
    link: PRIVATE_ROUTES.messagesSender(),
    title: 'Sent messages'
  },
  {
    icon: MessageSquareReply,
    link: PRIVATE_ROUTES.messagesReceiver(),
    title: 'Received messages'
  },
  {
    icon: MessageSquarePlus,
    link: PRIVATE_ROUTES.messagesCreate(),
    title: 'Create message'
  }
]
