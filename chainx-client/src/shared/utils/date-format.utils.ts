import { format } from 'date-fns'

export const dateFormat = (date: string) => {
  const newDate = new Date(date)

  const formattedDate = format(newDate, 'yyyy-MM-dd | HH:mm')

  return formattedDate
}
