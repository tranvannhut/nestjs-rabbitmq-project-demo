import { Injectable } from '@nestjs/common';
import { UpdateArticleDto } from '../dto/update-article.dto';
import { Article } from '../schemas/article.schema';
import { ArticleRepository } from '../repository/article.repository';
import { CreateArticleDto } from '../dto/create-article.dto';
@Injectable()
export class ArticleService {
  constructor(private readonly articleRepository: ArticleRepository) {}
  async getAllArticle(): Promise<Article[]> {
    const data = await this.articleRepository.getAllArticle();
    return data;
  }
  async getArticleById(id: string): Promise<Article> {
    return this.articleRepository.getArticleById(id);
  }
  async saveArticle(createArticleDto: CreateArticleDto): Promise<Article> {
    return await this.articleRepository.createArticle(createArticleDto);
  }
  async updateArticle(
    id: string,
    updateArticleDto: UpdateArticleDto,
  ): Promise<Article> {
    return await this.articleRepository.updateArticle(id, updateArticleDto);
  }
  async delete(id: string): Promise<Article> {
    return await this.articleRepository.delete(id);
  }
  async resetCache(): Promise<void> {}
  /*  constructor(
    // @Inject(CACHE_MANAGER) private readonly cacheService: Cache,
    @InjectModel(Article.name)
    private readonly ArticleModel: Model<ArticleDocument>,
    @Inject(CACHE_MANAGER) private cacheService: Cache,
  ) {}
  async getAllArticle(): Promise<Article> {
    const keyArticleGetAll = 'get-all-Article-cache';
    // get data from cache
    const getAllDataCache = await this.cacheService.get(keyArticleGetAll);
    console.log(getAllDataCache);
    if (getAllDataCache) {
      return {
        data: getAllDataCache,
        message: 'Get from redis',
      };
    }
    if (!getAllDataCache) {
      const data = await this.ArticleModel.find().exec();
      this.cacheService.set(keyArticleGetAll, data);
      return { ...data, message: 'Get from DB' };
    }
  }
  async getArticleById(id: string): Promise<Article> {
    console.log(id);
    const getDataArticleByIdCache = await this.cacheService.get<{
      name: string;
    }>(id.toString());
    // 1. get data from cache with each id
    if (getDataArticleByIdCache) {
      // if exist
      return {
        data: getDataArticleByIdCache,
      };
    }
    // 2. if not exit then set cache from DB and return
    if (!getDataArticleByIdCache) {
      const data = await this.ArticleModel.findById({ _id: id }).exec();
      console.log('date', data);
      this.cacheService.set(id.toString(), data);
      return { ...data };
    }
  }
  async saveArticle(createArticleDto: CreateArticleDto): Promise<Article> {
    const createdArticle = new this.ArticleModel(createArticleDto);
    return createdArticle.save();
  }
  async updateArticle(
    id: string,
    updateArticleDto: UpdateArticleDto,
  ): Promise<Article> {
    try {
      return await this.ArticleModel.findByIdAndUpdate(
        id,
        updateArticleDto,
      ).exec();
    } catch (error) {
      console.log(error);
    }
  }
  async delete(id: string): Promise<Article> {
    const getDataArticleByIdCache = await this.cacheService.get<{
      name: string;
    }>(id.toString());
    // 1. Delete from cache if exist
    if (getDataArticleByIdCache) {
      this.cacheService.del(id);
    }
    // 2. delete in DB
    return await this.ArticleModel.findByIdAndDelete(id).exec();
  }
  async resetCache(): Promise<void> {
    await this.cacheService.reset();
  } */
}
