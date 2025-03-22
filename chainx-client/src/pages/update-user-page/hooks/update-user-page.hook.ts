import { useEffect, useState } from 'react'
import { useAuth } from '@/features/tokens'
import { SubmitHandler, useForm } from 'react-hook-form'
import {
  EnumUploadImage,
  useUploadImage
} from '@/features/images/hooks/upload-image.hook'
import { useUpdateUser } from '../../../features/users/hooks/update-user.hook'
import { TypeUpdateUser } from '@/shared/models/user.type'

export const useUpdateUserPage = () => {
  const { isAuth, isLoading } = useAuth()
  const [imageURL, setImageURL] = useState<string | null>(null)
  const [image, setImage] = useState<File | null>(null)
  const { mutateAsync: mutateUploadAvatar } = useUploadImage({
    type: EnumUploadImage.AVATAR
  })
  const { mutateAsync: mutateUpdateUser } = useUpdateUser()

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

  const onSubmit: SubmitHandler<TypeUpdateUser> = async data => {
    try {
      if (image != null) {
        const response = await mutateUploadAvatar(image)
        const dataUpdateUser = { ...data, imageUrl: response.url }
        mutateUpdateUser(dataUpdateUser)
      } else {
        const dataUploadUser = { ...data, imageUrl: isAuth!.imageUrl }
        mutateUpdateUser(dataUploadUser)
      }
    } catch (error) {
      console.error('Error')
    }
  }

  return {
    isLoading,
    handleSubmit,
    onSubmit,
    imageURL,
    setImageURL,
    setImage,
    errors,
    register
  }
}
