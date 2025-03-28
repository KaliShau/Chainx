import {
  BadRequestException,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { FileConfig } from 'src/config/file.config'

@Controller('files')
export class FilesController {
  @Auth()
  @Post('avatars/upload')
  @UseInterceptors(FileInterceptor('avatar', FileConfig('avatars')))
  uploadAvatars(@UploadedFile() file: Express.Multer.File) {
    if (!file) throw new BadRequestException('File is required!')
    return {
      url: `/uploads/avatars/${file.filename}`,
    }
  }

  @Auth()
  @Post('posts/upload')
  @UseInterceptors(FileInterceptor('post', FileConfig('posts')))
  uploadImagePosts(@UploadedFile() file: Express.Multer.File) {
    if (!file) throw new BadRequestException('File is required!')
    return {
      url: `/uploads/posts/${file.filename}`,
    }
  }
}
