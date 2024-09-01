import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { BlogsModule } from './blogs/blogs.module';
import { SigninModule } from './signin/signin.module';

@Module({
  imports: [PostsModule, BlogsModule, SigninModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
