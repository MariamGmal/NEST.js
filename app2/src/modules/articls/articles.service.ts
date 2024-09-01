import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Article } from 'src/core/schema/articles.schema';
import { ArticlesDTO } from '../auth/dto/articles.dto';

@Injectable()
export class ArticlesService {
  constructor(@InjectModel(Article.name) private articleMod: Model<Article>) {}
  getArticles(): string {
    this.articleMod.find();
    return 'hello from articles';
  }

  addArticle(body: ArticlesDTO) {
    return this.articleMod.insertMany(body);
  }
  async updateArticle(body: ArticlesDTO) {
    const update = await this.articleMod.findOneAndUpdate(
      { title: body.title, content: body.content },
      { $set: { description: body.description } },
    );
    return { message: 'updated', update };
  }

  async deleteArticle(body: ArticlesDTO) {
    const deleted = await this.articleMod.findOneAndDelete({
      title: body.title,
      content: body.content,
    });
    return { message: 'deleted', deleted };
  }
}
