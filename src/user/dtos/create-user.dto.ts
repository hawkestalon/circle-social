import { IsArray, IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsArray()
  roles: string[];

  @IsString()
  profileImgUrl: string;
}
