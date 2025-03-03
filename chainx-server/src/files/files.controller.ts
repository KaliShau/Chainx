import {
  BadRequestException,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { diskStorage } from 'multer'
import { extname } from 'path'

@Controller('files')
export class FilesController {
  @Auth()
  @Post('avatars/upload')
  @UseInterceptors(
    FileInterceptor('avatar', {
      storage: diskStorage({
        destination: './uploads/avatars',
        filename: (req, file, callback) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('')
          return callback(null, `${randomName}${extname(file.originalname)}`)
        },
      }),
    })
  )
  uploadImage(@UploadedFile() file: Express.Multer.File) {
    if (!file) throw new BadRequestException('File is required!')
    return {
      url: `uploads/avatars/${file.filename}`,
    }
  }
}
