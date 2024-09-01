import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class BlogsDTO {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(10)
  title: string;

  @IsNotEmpty()
  @IsNumber()
  id: string | number;
}
