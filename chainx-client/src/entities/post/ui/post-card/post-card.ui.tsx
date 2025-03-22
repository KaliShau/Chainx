import { TypePost } from '@/shared/models/post.type'
import { FC } from 'react'
import styles from './post-card.module.scss'
import Image from 'next/image'
import { dateFormat } from '@/shared/utils/date-format.utils'
import { Heart, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { PUBLIC_ROUTES } from '@/shared/config/routes.config'
import { Button } from '@/shared/ui/button/button.ui'
import { useDeletePost } from '@/features/posts/hooks/delete-post.hook'

export const PostCard: FC<TypePost> = props => {
  const { mutateAsync } = useDeletePost()

  const deleteAction = () => {
    mutateAsync(props.id)
  }

  return (
    <div className={styles.root}>
      <Link href={PUBLIC_ROUTES.post(props.id)}>
        <Image
          src={props.imageUrl}
          alt='Image posts'
          width={1000}
          height={1000}
          priority={true}
        />
        <div>
          <h4>{props.title}</h4>
          <p>{dateFormat(props.createdAt)}</p>
        </div>
        <div className={styles.info}>
          <p>
            <Heart />
            {props.likes?.length}
          </p>
          <p>
            <MessageCircle /> {props.comments?.length}
          </p>
        </div>
      </Link>
      <Button onClick={deleteAction}>Delete</Button>
    </div>
  )
}
