'use client'

import { useAuth } from '@/features/tokens/hooks/auth.hook'
import { CreatePostForm } from '@/features/posts/ui/create-post-form.ui'
import { Layout } from '@/shared/ui/layout/layout.ui'

export const CreatePostPage = () => {
  const auth = useAuth()

  if (auth) {
    return auth
  }

  return (
    <Layout>
      <h2>Create post</h2>
      <CreatePostForm />
    </Layout>
  )
}
