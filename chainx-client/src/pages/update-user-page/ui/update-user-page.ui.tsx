import { useEffect, useState } from 'react'
import styles from './update-user-page.module.scss'
import { useAuth } from '@/features/tokens'
import { Loader } from '@/shared/ui/loader/loader.ui'
import { ImageInput } from './image-input.ui'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Field } from '@/shared/ui/field/field.ui'
import { Button } from '@/shared/ui/button/button.ui'
import { useUploadAvatar } from '@/features/images/hooks/upload-avatar.hook'
import { useUpdateUser } from '../../../features/users/hooks/update-user.hook'
import { TypeUpdateUser } from '@/shared/models/user.type'

export const UpdateUser = () => {
  const { isAuth, isLoading } = useAuth()
  const [imageURL, setImageURL] = useState<string | null>(null)
  const [image, setImage] = useState<File | null>(null)
  const { mutateAsync: mutateUploadAvatar } = useUploadAvatar()
  const { mutateAsync: mutateUser } = useUpdateUser()

  const {
    formState: { errors },
    register,
    handleSubmit,
    setValue
  } = useForm<TypeUpdateUser>({ mode: 'onChange' })

  useEffect(() => {
    if (isAuth) {
      setImageURL(isAuth?.imageUrl)
      setValue('firstName', isAuth.firstName)
      setValue('lastName', isAuth.lastName)
      setValue('username', isAuth.username)
    }
  }, [isAuth])

  if (isLoading) return <Loader />

  const onSubmit: SubmitHandler<TypeUpdateUser> = async data => {
    try {
      if (image != null) {
        const response = await mutateUploadAvatar(image)
        const dataUploadUser = { ...data, imageUrl: response.url }
        mutateUser(dataUploadUser)
      } else {
        const dataUploadUser = { ...data, imageUrl: isAuth!.imageUrl }
        mutateUser(dataUploadUser)
      }
    } catch (error) {
      console.error('Ошибка при загрузке аватара:', error)
    }
  }

  return (
    <form className={styles.root} onSubmit={handleSubmit(onSubmit)}>
      <ImageInput
        imageURL={imageURL}
        setImageURL={setImageURL}
        setImage={setImage}
      />
      <div className={styles.fields}>
        <Field
          error={errors.username}
          topic='Username'
          {...register('username', { required: true })}
        />
        <Field
          error={errors.firstName}
          topic='First name'
          {...register('firstName', { required: true })}
        />
        <Field
          error={errors.lastName}
          topic='Last name'
          {...register('lastName', { required: true })}
        />
        <Button>Сохранить</Button>
      </div>
    </form>
  )
}
