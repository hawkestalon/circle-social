import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/:id')
  public async getUser(@Param('id') id: number) {
    return this.userService.getUser({ id });
  }

  @Post()
  public async createUser(@Body() data: CreateUserDto) {
    console.log(data);
    return this.userService.createUser(data);
  }
}
