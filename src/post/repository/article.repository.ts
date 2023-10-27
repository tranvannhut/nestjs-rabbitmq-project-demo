import { CreateArticleDto } from './../dto/create-article.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Article, ArticleDocument } from '../schemas/article.schema';
import { Model } from 'mongoose';
import { UpdateArticleDto } from '../dto/update-article.dto';

@Injectable()
export class ArticleRepository {
  constructor(
    @InjectModel(Article.name)
    private readonly articleModel: Model<ArticleDocument>,
  ) {}
  async createArticle(createArticleDto: CreateArticleDto) {
    console.log(createArticleDto);
    const articleObj = new this.articleModel(createArticleDto);
    return await articleObj.save();
  }
  async getAllArticle() {
    const data = await this.articleModel.find().exec();
    console.log(data);
    return data;
  }
  async getArticleById(id: string) {
    return await this.articleModel.findById(id).exec();
  }
  async updateArticle(
    id: string,
    updateArticleDto: UpdateArticleDto,
  ): Promise<Article> {
    return await this.articleModel
      .findByIdAndUpdate(id, updateArticleDto)
      .exec();
  }
  async delete(id: string): Promise<Article> {
    return await this.articleModel.findByIdAndDelete(id);
  }
}
