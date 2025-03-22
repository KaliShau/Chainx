import styles from './update-user-page.module.scss'
import { Loader } from '@/shared/ui/loader/loader.ui'
import { Field } from '@/shared/ui/field/field.ui'
import { Button } from '@/shared/ui/button/button.ui'
import { FieldImage } from '@/shared/ui/field-image/field-image.ui'
import { useUpdateUserPage } from '../hooks/update-user-page.hook'

export const UpdateUser = () => {
  const {
    isLoading,
    handleSubmit,
    onSubmit,
    imageURL,
    setImageURL,
    setImage,
    errors,
    register
  } = useUpdateUserPage()

  if (isLoading) return <Loader />

  return (
    <form className={styles.root} onSubmit={handleSubmit(onSubmit)}>
      <FieldImage
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
