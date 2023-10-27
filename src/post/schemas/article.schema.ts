import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

// export type ArticleDocument = Article & Document;
export type ArticleDocument = HydratedDocument<Article>;

@Schema()
export class Article {
  @Prop({ require: true })
  title: string;

  @Prop()
  description: string;

  @Prop()
  completedAt?: Date;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt?: Date;
}
export const ArticleSchema = SchemaFactory.createForClass(Article);
