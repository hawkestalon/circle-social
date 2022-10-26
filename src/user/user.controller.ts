import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserService } from './user.service';
import { User } from '@prisma/client';

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

  @Put('/:id')
  public async updateUser(
    @Param('id') id: number,
    @Body() data: CreateUserDto,
  ): Promise<User> {
    return this.userService.updateUser({ id }, data);
  }

  @Delete('/:id')
  public async deleteUser(@Param('id') id: number): Promise<User> {
    return this.userService.deleteUser({ id });
  }

  // TODO: Patch request
  // TODO: DTOs and validation for put, del, and patch requests
  @Patch('/:id')
  public async partialUpdateUser(
    @Param('id') id: number,
    @Body() data: Partial<CreateUserDto>,
  ): Promise<User> {
    return this.userService.updateUser({ id }, data);
  }
}
