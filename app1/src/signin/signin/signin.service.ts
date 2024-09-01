import { Injectable } from '@nestjs/common';
import { userDTO } from 'src/dto/user.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class SigninService {
  constructor(private _jwtService: JwtService) {}

  users = [];

  getAllUsers() {
    return this.users;
  }

  async signup(body: userDTO) {
    const user = this.users.some((ele) => ele.email === body.email);
    if (user) {
      return 'already registerd please sign in ';
    } else {
      body.password = await bcrypt.hash(body.password, 8);
      this.users.push(body);
      return { message: 'added', users: this.users };
    }
  }
  async signin(body: userDTO) {
    const user = this.users.find((ele) => ele.email === body.email);
    if (user) {
      const matched = await bcrypt.compare(body.password, user.password);
      if (matched) {
        const token = this._jwtService.sign(
          { email: user.email },
          { secret: 'bl7' },
        );
        return { message: 'welcome', toke: token };
      } else {
        return 'wrong password';
      }
    } else {
      return 'sigin up first';
    }
  }
}
