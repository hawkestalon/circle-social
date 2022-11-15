import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import prisma from '@prisma/client';
import { PostDto } from './dtos/post.dto';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get('/:id')
  public async getPost(@Param('id') id: number): Promise<prisma.Post> {
    return this.postService.getPost({ id });
  }

  @Get('/user/:id')
  public getPostsByUser(@Param('id') id: number): Promise<prisma.Post[]> {
    return this.postService.getAllUserPosts({ id });
  }

  @Post()
  public async createPost(@Body() data: PostDto): Promise<prisma.Post> {
    return this.postService.createPost({
      ...data,
      author: {
        connect: { id: data.authorEmail },
      },
    });
  }

  @Put('/:id')
  public async editPost(
    @Param('id') id: number,
    @Body() data: PostDto,
  ): Promise<prisma.Post> {
    return this.postService.editPost({ id }, data);
  }

  @Delete('/:id')
  public async deletePost(@Param('id') id: number): Promise<prisma.Post> {
    return this.postService.deletePost({ id });
  }
}
