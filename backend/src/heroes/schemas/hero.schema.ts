import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type HeroDocument = Hero & Document;
@Schema()
export class Hero {
  @Prop({ required: true })
  nome: string;

  @Prop({ required: true, type: [String] })
  habilidades: string;

  @Prop({ required: true })
  origem: string;
}
export const HeroSchema = SchemaFactory.createForClass(Hero);
