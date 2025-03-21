import styles from './create-post.module.scss'
import { CreatePostForm } from '@/features/posts/ui/create-post-form.ui'

export const CreatePostPage = () => {
  return (
    <div className={styles.root}>
      <h2>Create post</h2>
      <CreatePostForm />
    </div>
  )
}
