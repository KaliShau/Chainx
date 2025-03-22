'use client'

import { useAuth } from '@/features/tokens/hooks/auth.hook'
import styles from './create-post.module.scss'
import { CreatePostForm } from '@/features/posts/ui/create-post-form.ui'

export const CreatePostPage = () => {
  const auth = useAuth()

  if (auth) {
    return auth
  }

  return (
    <div className={styles.root}>
      <h2>Create post</h2>
      <CreatePostForm />
    </div>
  )
}
