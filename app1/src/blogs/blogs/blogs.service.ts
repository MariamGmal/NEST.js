import { Injectable } from '@nestjs/common';

@Injectable()
export class BlogsService {
  blogs = [
    { title: 'blog 1', id: 1 },
    { title: 'blog 2', id: 2 },
    { title: 'blog 3', id: 3 },
    { title: 'blog 4', id: 4 },
  ];
  getAllBlogs() {
    return this.blogs;
  }
  addBlogs(body: any) {
    this.blogs.push(body);
    return { message: 'added', blogs: this.blogs };
  }
  updateBlogs() {
    return 'hello from updateblogs';
  }
  deleteBlogs() {
    return 'hello from deleteblogs';
  }
  batchValues() {
    return 'hello from batchValues';
  }
  getById(id) {
    return this.blogs.find((ele) => ele.id == id);
  }
}
