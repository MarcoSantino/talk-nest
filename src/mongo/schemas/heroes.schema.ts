import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type HeroesDocument = Heroes & Document;

@Schema()
export class Heroes {
  @Prop({ required: true })
  heroName: string;

  @Prop({ required: true })
  personName: string;

  @Prop()
  region: string;
}

export const HeroesSchema = SchemaFactory.createForClass(Heroes);
