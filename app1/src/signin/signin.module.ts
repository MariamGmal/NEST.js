import { Module } from '@nestjs/common';
import { SigninController } from './signin/signin.controller';
import { SigninService } from './signin/signin.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [SigninController],
  providers: [SigninService, JwtService],
})
export class SigninModule {}
