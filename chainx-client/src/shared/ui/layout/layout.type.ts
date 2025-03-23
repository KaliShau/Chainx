import { HTMLAttributes, DetailedHTMLProps, PropsWithChildren } from 'react'

export type TypeLayout = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  PropsWithChildren
