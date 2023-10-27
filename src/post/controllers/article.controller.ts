import { Body, Controller, Param } from '@nestjs/common';

import { CreateArticleDto } from '../dto/create-article.dto';
import { UpdateArticleDto } from '../dto/update-article.dto';
import { ArticleService } from '../services/article.service';
import { Article } from '../schemas/article.schema';
import { MessagePattern } from '@nestjs/microservices';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}
  @MessagePattern({ cmd: 'get-all-article' })
  async getAllArticle(): Promise<Article[]> {
    return await this.articleService.getAllArticle();
  }
  @MessagePattern({ cmd: 'get-article-by-id/:id' })
  async getArticleById(@Param('id') id: string): Promise<Article> {
    console.log(id);
    return this.articleService.getArticleById(id);
  }

  @MessagePattern({ cmd: 'add-article' })
  async saveArticle(
    @Body() createArticleDto: CreateArticleDto,
  ): Promise<Article> {
    console.log('create article');
    return this.articleService.saveArticle(createArticleDto);
  }
  @MessagePattern('update-article/:id')
  async updateArticle(
    @Param('id') id: string,
    @Body() updateArticle: UpdateArticleDto,
  ): Promise<Article> {
    return this.articleService.updateArticle(id, updateArticle);
  }
  @MessagePattern('delete-article/:id')
  async deleteArticle(@Param('id') id: string) {
    return this.articleService.delete(id);
  }
  /* @Get('get-all-article')
  async getAllArticle() {
    return this.articleService.getAllArticle();
  }
  @Get('get-article-by-id/:id')
  async getArticleById(@Param('id') id: string): Promise<Article> {
    console.log(id);
    return this.articleService.getArticleById(id);
  }

  @Post('save-article')
  async saveArticle(
    @Body() createArticleDto: CreateArticleDto,
  ): Promise<Article> {
    return this.articleService.saveArticle(createArticleDto);
  }
  @Put('update-article/:id')
  async updateArticle(
    @Param('id') id: string,
    @Body() updateArticle: UpdateArticleDto,
  ): Promise<Article> {
    return this.articleService.updateArticle(id, updateArticle);
  }
  @Delete('delete-article/:id')
  async deleteArticle(@Param('id') id: string) {
    return this.articleService.delete(id);
  }
  @Get('reset-cache')
  async resetCache() {
    await this.articleService.resetCache();
  }
   // use auto cache by CacheInterceptor
  @UseInterceptors(CacheInterceptor)
  @CacheTTL(10)
  @CacheKey('auto-caching-fake-model')
  @Get('auto-caching')
  async getAutoCaching(): Promise<any> {
    return 'hello';
  } */
}
