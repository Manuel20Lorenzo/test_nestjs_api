import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type usersDocument = users & Document;

@Schema({timestamps:true})
export class users {

  @Prop({required:true})
  name: string;
  
  @Prop({required:true})
  surname:string

  @Prop({required:true})
  email:string

  
}

export const usersSchema = SchemaFactory.createForClass(users);