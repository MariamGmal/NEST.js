import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { SigninService } from './signin.service';
import { userDTO } from 'src/dto/user.dto';

@Controller('/user')
export class SigninController {
  constructor(private readonly _signinService: SigninService) {}

  @Get()
  getAllUsers(@Query() query: any) {
    return this._signinService.getAllUsers();
  }

  @Post('/signup')
  signup(@Body() body: userDTO) {
    return this._signinService.signup(body);
  }

  @Post('/signin')
  signin(@Body() body: userDTO) {
    return this._signinService.signin(body);
  }
  // @Put()
  // updateUser(@Body() body: userDTO) {
  //   return this._signinService.updateUser(body);
  // }

  // @Delete()
  // deleteUser(@Body() body: userDTO) {
  //   return this._signinService.deleteUser(body);
  // }
}
