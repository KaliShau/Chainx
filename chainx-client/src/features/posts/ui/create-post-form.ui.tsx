import { FieldImage } from '@/shared/ui/field-image/field-image.ui'
import styles from './posts.module.scss'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { TypeCreatePost } from '@/shared/models/post.type'
import { Field } from '@/shared/ui/field/field.ui'
import { Button } from '@/shared/ui/button/button.ui'
import { FieldArea } from '@/shared/ui/field-area/field-area.ui'
import { useCreatePost } from '../hooks/create-post.hook'
import { useUploadImage } from '@/features/images'
import { EnumUploadImage } from '@/features/images/hooks/upload-image.hook'
import toast from 'react-hot-toast'

type TypeForm = Omit<TypeCreatePost, 'imageUrl'>

export const CreatePostForm = () => {
  const [imageURL, setImageURL] = useState<string | null>(null)
  const [image, setImage] = useState<File | null>(null)
  const { mutate: mutateCreatePost } = useCreatePost()
  const { mutateAsync: mutateUploadPostImage } = useUploadImage({
    type: EnumUploadImage.POST
  })

  const {
    formState: { errors },
    register,
    handleSubmit
  } = useForm<TypeForm>({ mode: 'onChange' })

  const onSubmit: SubmitHandler<TypeForm> = async data => {
    try {
      if (image) {
        const response = await mutateUploadPostImage(image)
        const dataCreatePost = { ...data, imageUrl: response.url }
        mutateCreatePost(dataCreatePost)
      } else {
        toast.error('Not found post image!')
      }
    } catch (error) {
      console.error('Error')
    }
  }
  return (
    <form className={styles.root} onSubmit={handleSubmit(onSubmit)}>
      <FieldImage
        className={styles.input}
        setImage={setImage}
        setImageURL={setImageURL}
        imageURL={imageURL}
      />
      <Field
        error={errors.title}
        topic='Title'
        {...register('title', { required: true })}
      />
      <FieldArea
        error={errors.content}
        topic='Description'
        {...register('content', { required: true })}
        className={styles.content}
      />
      <Button>Create</Button>
    </form>
  )
}
