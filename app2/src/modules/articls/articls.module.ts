import { Module } from '@nestjs/common';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Article, AticlesSchema } from 'src/core/schema/articles.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Article.name, schema: AticlesSchema }]),
  ],
  controllers: [ArticlesController],
  providers: [ArticlesService],
})
export class ArticlsModule {}
