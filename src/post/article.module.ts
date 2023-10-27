import { Article, ArticleSchema } from './schemas/article.schema';
import { Module } from '@nestjs/common';

import { ArticleController } from './controllers/article.controller';
import { ArticleService } from './services/article.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticleRepository } from './repository/article.repository';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Article.name, schema: ArticleSchema }]),
  ],
  controllers: [ArticleController],
  providers: [ArticleService, ArticleRepository],
})
export class ArticleModule {}
