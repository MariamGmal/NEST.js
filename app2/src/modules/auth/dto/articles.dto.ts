import { IsNumber, IsString, MaxLength, MinLength } from 'class-validator';

export class ArticlesDTO {
  @IsString()
  @MinLength(3)
  @MaxLength(30)
  title: string;

  @IsString()
  @MinLength(3)
  @MaxLength(3000)
  slug: string;

  @IsString()
  @MinLength(3)
  @MaxLength(3000)
  description: string;

  @IsString()
  @MinLength(3)
  @MaxLength(3000)
  content: string;

  @IsString()
  auther: string;
  @IsString()
  coverImage: string;

  images: string[];

  likes: string;

  tagList: string[];
}
