import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/:id')
  public async getUser(@Param('id') id: string) {
    return this.userService.getUser({ id: Number(id) });
  }

  @Post()
  public async createUser(@Body() data: any) {
    return this.userService.createUser(data);
  }
}
