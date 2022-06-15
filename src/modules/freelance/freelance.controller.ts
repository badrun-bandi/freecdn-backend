import { ClassSerializerInterceptor, Controller, Get, Response, NotFoundException, Query, StreamableFile, UseGuards, UseInterceptors, VERSION_NEUTRAL, Body, Delete, Param, Post, Put } from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';

import { readFileSync } from 'fs';
import { FreelanceService } from './freelance.service';
import { APPLICATIONSET } from './freelance.model';
import { FreelanceInterceptor } from './freelance.interceptor';
import { FreelanceGuard } from './freelance.guard';
import { FreelancerDto } from './dto/freelancer.dto';
import { Freelancer } from './schemas/freelancer.schema';

@Controller({ path: 'freecdn', version: VERSION_NEUTRAL })
@UseGuards(FreelanceGuard)
@UseGuards(ThrottlerGuard)
@UseInterceptors(ClassSerializerInterceptor)
export class FreelanceController {

  constructor(private readonly freelanceService: FreelanceService) {}

  @Put('freelance')
  async create(@Body() freelancerDto: FreelancerDto) {
    return await this.freelanceService.create(freelancerDto);
  }

  @Put('freelance/:id')
  async update(@Param('id') id: string, @Body() freelancer: Freelancer) {
    return await this.freelanceService.update(id, freelancer);
  }

  @Post('freelance')
  async save(@Body() freelancer: Freelancer) {
    await this.freelanceService.save(freelancer);
  }

  @Get('freelance')
  async findAll(@Query() query: {username:string}): Promise<Freelancer[]> {
    return this.freelanceService.findAll(query);
  }

  @Get('freelance/:id')
  async findOne(@Param('id') id: string): Promise<Freelancer> {
    return this.freelanceService.findOne(id);
  }

  @Delete('freelance/all')
  async deleteAll() {
    return this.freelanceService.deleteAll();
  }

  @Delete('freelance/:id')
  async delete(@Param('id') id: string) {
    return this.freelanceService.delete(id);
  }
}
