import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesDTO } from '../auth/dto/articles.dto';

@Controller('articles')
export class ArticlesController {
  constructor(private _articlesService: ArticlesService) {}
  @Get()
  getArticles() {
    return this._articlesService.getArticles();
  }

  @Post()
  addArticle(@Body() body: ArticlesDTO) {
    return this._articlesService.addArticle(body);
  }

  @Put()
  updateArticle(@Body() body: ArticlesDTO) {
    return this._articlesService.updateArticle(body);
  }

  @Delete()
  deleteArticle(@Body() body: ArticlesDTO) {
    return this._articlesService.deleteArticle(body);
  }
}
