import { HttpModule } from '@nestjs/axios';
import {  Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { FreelanceController } from './freelance.controller';
import { FreelanceInterceptor } from './freelance.interceptor';
import { FreelanceService } from './freelance.service';
import { Freelancer, FreelancerSchema } from './schemas/freelancer.schema';

@Module({
  imports: [
    ConfigModule, 
    HttpModule,
    MongooseModule.forFeature([{ name: Freelancer.name, schema: FreelancerSchema }])
  ],
  controllers: [FreelanceController],
  providers: [FreelanceService, { provide: APP_INTERCEPTOR, useClass: FreelanceInterceptor }],
})
export class FreelanceModule {}
