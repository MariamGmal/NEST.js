import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';

import { MongooseModule } from '@nestjs/mongoose';
import { ArticlsModule } from './modules/articls/articls.module';

@Module({
  imports: [
    AuthModule,
    ArticlsModule,
    MongooseModule.forRoot('mongodb://localhost/nest_ttt'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
