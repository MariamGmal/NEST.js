import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { SignInDTO } from '../dto/auth.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/core/schema/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class SigninService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private _jwtService: JwtService,
  ) {}
  signIn = async (info: SignInDTO) => {
    const user = await this.userModel.findOne({ email: info.email });
    if (user && (await bcrypt.compare(info.password, user.password))) {
      const token = this._jwtService.sign(
        { name: user.name, email: user.email },
        { secret: 'bl7' },
      );
      return { message: 'welcome', toke: token };
    } else {
      throw new HttpException(
        'email or password wrong',
        HttpStatus.BAD_REQUEST,
      );
    }
  };
}
