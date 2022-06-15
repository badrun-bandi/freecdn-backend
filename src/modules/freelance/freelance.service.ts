import { Injectable, Logger, Req } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { createCipheriv, createDecipheriv, randomBytes } from 'crypto';
import * as fs from 'fs';
import { appendFile, close, open } from 'fs';
import * as moment from 'moment';
import { Model } from 'mongoose';
import { join } from 'path';
import { isEmpty } from 'src/common/common-util';
import { FreelancerDto } from './dto/freelancer.dto';
import { Freelancer, FreelancerDocument } from './schemas/freelancer.schema';

@Injectable()
export class FreelanceService {

  private readonly path: string;
  private readonly logger = new Logger(FreelanceService.name);

  constructor(@InjectModel(Freelancer.name) private readonly freelancerModel: Model<FreelancerDocument>, private configService: ConfigService) {
    this.path = this.configService.get<string>('LOG_PATH');
  }

  async authenticate(@Req() req: any): Promise<boolean> {
      this.writeRequest(req);
      this.logger.log(`Access request, agent:'${req.headers['User-Agent']}'`);
      return true;
  }

  closeFS(fd) {
    close(fd, (err) => {
      if (err) throw err;
    });
  }

  writeRequest(req: Request) {
      const today = moment().format('YYYY-MM-DD');
      const nowT = moment().toLocaleString();
      if (!fs.existsSync(this.path + '/request')) {
        fs.mkdirSync(this.path + '/request', { recursive: true });
      }
      const path = join(this.path + '/request', today+'.json');
      open(path, 'a', (err, fd) => {
        if (err) throw err;
        try {
          const logs = { time: nowT, id: 'request', referrer: req.referrer, headers: req.headers, body: req.body };
          appendFile(fd, JSON.stringify(logs) + '\r\n', 'utf8', (err) => {
            this.closeFS(fd);
            if (err) throw err;
          });
        } catch (err) {
          this.closeFS(fd);
          this.logger.error(err);
          throw err;
        }
      });
  }

  async create(freelancerDto: FreelancerDto): Promise<Freelancer> {
    return await this.freelancerModel.create(freelancerDto).then(response=>{
      return this.findOne(response._id.toString());
    });
  }

  async save(freelancer: Freelancer): Promise<Freelancer> {
    const response = new this.freelancerModel(freelancer);
    return response.save();
  }

  async findAll(query:{username:string}): Promise<Freelancer[]> {
    const params = query.username ? {username: { $regex: '.*' + query.username + '.*' } } : {};
    return this.freelancerModel.find(params).then(data=>{
    return data.map(item => {
      item.id = item._id.toString();
      return item.toObject();
    });
  });
  }

  async findOne(id: string): Promise<Freelancer> {
    return this.freelancerModel.findOne({ _id: id }).exec().then(data=>{
        data.id = data._id.toString();
        data.__v = undefined;
        console.log(data);
        return data.toObject();
    });
  }

  async update(id: string, freelancer: Freelancer): Promise<Freelancer> {
    return await this.freelancerModel.findByIdAndUpdate(id, freelancer, {new: true})
  }

  async delete(id: string): Promise<Freelancer> {
    const deletedFreelancer = await this.freelancerModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedFreelancer.toObject();
  }

  async deleteAll() {
    await this.freelancerModel.deleteMany();
  }

}
