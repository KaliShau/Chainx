import { AreaHTMLAttributes, InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'

export type TypeFieldArea = {
  topic: string
  error: FieldError | undefined
} & AreaHTMLAttributes<HTMLAreaElement>
