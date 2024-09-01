import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { SignUpDTO } from '../dto/auth.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/core/schema/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class SignupService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async signUp(body: SignUpDTO) {
    const user = await this.userModel.findOne({ email: body.email });
    if (user)
      throw new HttpException('email already registered', HttpStatus.CONFLICT);
    body.password = await bcrypt.hash(body.password, 8);

    const addedUser = await this.userModel.insertMany(body);
    return { message: 'success', addedUser };
  }
}
