import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from './user.schema';

@Schema({ versionKey: false, timestamps: true })
export class Article {
  @Prop({ required: true })
  title: string;

  @Prop()
  slug: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  content: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  auther: User;

  @Prop({ required: true })
  coverImage: string;

  @Prop({ required: true })
  images: string[];

  @Prop({})
  likes: string;

  @Prop({ required: true })
  tagList: string[];
}

export const AticlesSchema = SchemaFactory.createForClass(Article);
