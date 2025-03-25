export type TypeTable = {
  head: TypeTableHead[]
  rows: TypeTableRow<TypeTableHead[]>[]
}

export type TypeTableHead = {
  title: string
}

export type TypeTableRow<Head extends TypeTableHead[]> = {
  row: TypeTableItem[] & { length: Head['length'] }
}

export type TypeTableItem = {
  title?: string
  link?: string
  id: string
}
