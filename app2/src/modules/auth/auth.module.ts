import { Module } from '@nestjs/common';
import { SignupController } from './signup/signup.controller';
import { SigninController } from './signin/signin.controller';
import { SigninService } from './signin/signin.service';
import { SignupService } from './signup/signup.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/core/schema/user.schema';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [SignupController, SigninController],
  providers: [SigninService, SignupService, JwtService],
})
export class AuthModule {}
