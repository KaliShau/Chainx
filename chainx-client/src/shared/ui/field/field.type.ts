import { InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'

export type TypeField = {
  topic: string
  error: FieldError | undefined
} & InputHTMLAttributes<HTMLInputElement>
