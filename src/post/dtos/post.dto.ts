import { IsNumber, IsString } from 'class-validator';

export class PostDto {
  @IsString()
  content: string;

  @IsString()
  title: string;

  @IsNumber()
  authorEmail: number;

  @IsNumber()
  likes: number;

  @IsString()
  imgUrl: string;
}
