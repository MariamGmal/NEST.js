import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get('/hello')
  getUsers() {
    return 'hello users';
  }

  @Post()
  addUser() {
    return { message: 'message' };
  }
}
