import { ChangeEvent, useEffect, useRef, useState } from 'react'
import styles from './field-image.module.scss'
import { cn } from '@/shared/utils/classnames.utils'

type Type = {
  imageURL?: string | null
  setImageURL: (data: string) => void
  setImage: (file: File) => void
  className?: string
}

export const FieldImage = ({
  imageURL = null,
  setImageURL,
  setImage,
  className
}: Type) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setImageURL(URL.createObjectURL(file))
      setImage(file)
    }
  }

  const handleDivClick = () => {
    if (inputRef.current) {
      inputRef.current.click()
    }
  }
  return (
    <>
      <input
        ref={inputRef}
        type='file'
        accept='image/*'
        onChange={handleImageChange}
        className={cn(styles.input)}
      />
      {imageURL ? (
        <div>
          <img
            src={imageURL}
            alt='Selected'
            style={{ maxWidth: '100%', marginTop: '10px' }}
            className={cn(styles.box, className)}
            onClick={handleDivClick}
          />
        </div>
      ) : (
        <div
          onClick={handleDivClick}
          className={cn(styles.box, className)}
        ></div>
      )}
    </>
  )
}
