import { ChangeEvent, useEffect, useRef, useState } from 'react'
import styles from './update-user-page.module.scss'
import { useAuth } from '@/features/tokens'
import { Loader } from '@/shared/ui/loader/loader.ui'

type Type = {
  imageURL: string | null
  setImageURL: (data: string) => void
  setImage: (file: File) => void
}

export const ImageInput = ({ imageURL, setImageURL, setImage }: Type) => {
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
      />
      {imageURL ? (
        <div>
          <img
            src={imageURL}
            alt='Selected'
            style={{ maxWidth: '100%', marginTop: '10px' }}
            className={styles.box}
            onClick={handleDivClick}
          />
        </div>
      ) : (
        <div onClick={handleDivClick} className={styles.box}></div>
      )}
    </>
  )
}
