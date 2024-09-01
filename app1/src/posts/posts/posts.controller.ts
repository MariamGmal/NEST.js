import { Controller, Get } from '@nestjs/common';

@Controller('posts')
export class PostsController {
  @Get()
  getPost() {
    return 'hello from posts';
  }
}
