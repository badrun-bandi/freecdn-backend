import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Expose } from 'class-transformer';
import { IsEmpty, IsNotEmpty, IsOptional } from 'class-validator';
import { Optional } from '@nestjs/common';

export type FreelancerDocument = Freelancer & Document;
@Schema()
export class Freelancer {
  _id: any;
  __v: string;
  @Prop()
  id:  string;
  @Prop()
  @IsNotEmpty()
  username: string;
  @Prop()
  @IsNotEmpty()
  email: string;
  @Prop()
  @IsNotEmpty()
  phoneNumber: string;
  @Prop([String])
  @IsNotEmpty()
  skillsets: string[];
  @Prop([String])
  @IsNotEmpty()
  hobby: string[];
}

export const FreelancerSchema = SchemaFactory.createForClass(Freelancer);