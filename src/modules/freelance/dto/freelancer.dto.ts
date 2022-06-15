import { Optional } from "@nestjs/common";
import { Prop } from "@nestjs/mongoose";
import { Expose } from "class-transformer";
import { IsEmpty, IsNotEmpty, IsOptional } from "class-validator";
import * as Mongoose from 'mongoose';

export class FreelancerDto {
    id:  string;
    @IsNotEmpty()
    readonly username: string;
    @IsNotEmpty()
    readonly email: string;
    @IsNotEmpty()
    readonly phoneNumber: string;
    @IsNotEmpty()
    readonly skillsets: string[];
    @IsNotEmpty()
    readonly hobby: string[];
  }
