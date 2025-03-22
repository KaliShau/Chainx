import {
  AreaHTMLAttributes,
  InputHTMLAttributes,
  TextareaHTMLAttributes
} from 'react'
import { FieldError } from 'react-hook-form'

export type TypeFieldArea = {
  topic: string
  error: FieldError | undefined
} & TextareaHTMLAttributes<HTMLTextAreaElement>
