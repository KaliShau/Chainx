import { Field } from '@/shared/ui/field/field.ui'
import { useCreateComment } from '../hooks/create-comment.hook'
import { Button } from '@/shared/ui/button/button.ui'
import { SubmitHandler, useForm } from 'react-hook-form'
import { TypeCreateComment } from '@/shared/models/comment.type'

import styles from './comments.module.scss'

export const CreateCommentForm = ({ postId }: { postId: string }) => {
  const { mutate } = useCreateComment()

  const {
    formState: { errors },
    handleSubmit,
    register
  } = useForm<TypeCreateComment>({ mode: 'onChange' })

  const onSubmit: SubmitHandler<TypeCreateComment> = data => {
    mutate({ data, id: postId })
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.createCommentForm}
    >
      <Field
        error={errors.content}
        topic='Content'
        {...register('content', { required: true })}
      />
      <Button>Create</Button>
    </form>
  )
}
