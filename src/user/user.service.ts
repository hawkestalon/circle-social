import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/common/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  public async getUser(
    uniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    return this.prismaService.user.findUnique({ where: uniqueInput });
  }

  public async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prismaService.user.create({
      data,
    });
  }

  public async deleteUser(
    uniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User> {
    return this.prismaService.user.delete({ where: uniqueInput });
  }

  public async updateUser(
    uniqueInput: Prisma.UserWhereUniqueInput,
    data: Prisma.UserUpdateInput,
  ): Promise<User> {
    return this.prismaService.user.update({ where: uniqueInput, data });
  }
}
