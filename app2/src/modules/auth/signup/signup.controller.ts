import { Body, Controller, Post } from '@nestjs/common';
import { SignupService } from './signup.service';
import { SignUpDTO } from '../dto/auth.dto';
@Controller('signup')
export class SignupController {
  constructor(private _signupService: SignupService) {}

  @Post()
  signUp(@Body() body: SignUpDTO) {
    return this._signupService.signUp(body);
  }
}
