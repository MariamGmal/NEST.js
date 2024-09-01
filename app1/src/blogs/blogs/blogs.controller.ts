import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { BlogsDTO } from 'src/dto/blogs.dto';

@Controller('/blogs')
export class BlogsController {
  constructor(private readonly _blogsService: BlogsService) {}

  @Get()
  getBlogs(@Query() query: any) {
    return this._blogsService.getAllBlogs();
  }

  @Get(':id')
  getBlogsById(@Param('id') id: any, @Res() res: any, @Req() request: Request) {
    // return this._blogsService.getById(id);
    // console.log(request.body);
    res.send({ message: 'hello' });
    // return { id };
  }

  @Post()
  addBlogs(@Body() body: BlogsDTO) {
    return this._blogsService.addBlogs(body);
    // return { body };
  }
  @Delete()
  deleteBlogs() {
    return this._blogsService.deleteBlogs();
  }
  @Put()
  updateBlogs() {
    return this._blogsService.updateBlogs();
  }
  @Patch('/:id')
  batchValues() {
    return this._blogsService.batchValues();
  }
}
