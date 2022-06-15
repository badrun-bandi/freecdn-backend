import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ThrottlerModule } from '@nestjs/throttler';
import * as path from 'path';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RedirectMiddleware } from './common/redirect';
import { FreelanceModule } from './modules/freelance/freelance.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [path.join(__dirname, '..', 'env/.env.dev'), path.join(__dirname, '..', 'env/.env.pro')],
      isGlobal: true,
    }),
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        ttl: config.get('THROTTLE_TTL'),
        limit: config.get('THROTTLE_LIMIT'),
      }),
    }),
    ScheduleModule.forRoot(),
    MongooseModule.forRoot('mongodb+srv://demo-user:UnUJakEAaxmz0IkB@cluster0.injkhop.mongodb.net/?retryWrites=true&w=majority'),
    FreelanceModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'views/frontend'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RedirectMiddleware).forRoutes('*');
  }
}
