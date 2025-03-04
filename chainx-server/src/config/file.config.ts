import { Request } from 'express'
import { diskStorage } from 'multer'
import { extname } from 'path'

export const FileConfig = (directory: string) => {
  return {
    storage: diskStorage({
      destination: `./uploads/${directory}`,
      filename: (req, file, callback) => {
        const randomName = Array(32)
          .fill(null)
          .map(() => Math.round(Math.random() * 16).toString(16))
          .join('')
        return callback(null, `${randomName}${extname(file.originalname)}`)
      },
    }),
  }
}
