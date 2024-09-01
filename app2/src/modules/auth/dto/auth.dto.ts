import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class SignUpDTO {
  @MinLength(2)
  @MaxLength(10)
  name: string;

  @IsEmail()
  email: string;
  @IsString()
  password: string;
}

export class SignInDTO {
  @IsEmail()
  email: string;
  @IsString()
  password: string;
}
