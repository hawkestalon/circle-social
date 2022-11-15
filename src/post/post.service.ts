import { Injectable } from '@nestjs/common';
import { Prisma, Post } from '@prisma/client';
import { PrismaService } from 'src/common/prisma.service';

@Injectable()
export class PostService {
  constructor(private readonly prismaService: PrismaService) {}

  public async createPost(data: Prisma.PostCreateInput): Promise<Post> {
    return this.prismaService.post.create({ data });
  }

  public async getPost(
    uniqueInput: Prisma.PostWhereUniqueInput,
  ): Promise<Post | null> {
    return this.prismaService.post.findUnique({ where: uniqueInput });
  }

  public async getAllUserPosts(
    author: Prisma.UserWhereUniqueInput,
  ): Promise<Post[]> {
    return this.prismaService.post.findMany({
      where: {
        author: author,
      },
    });
  }

  public async editPost(
    uniqueInput: Prisma.PostWhereUniqueInput,
    data: Prisma.PostUpdateInput,
  ): Promise<Post> {
    return this.prismaService.post.update({ where: uniqueInput, data });
  }

  public async deletePost(
    uniqueInput: Prisma.PostWhereUniqueInput,
  ): Promise<Post> {
    return this.prismaService.post.delete({ where: uniqueInput });
  }
}
