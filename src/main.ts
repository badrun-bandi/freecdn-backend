import { ValidationPipe, VersioningType, VERSION_NEUTRAL } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as compression from 'compression';
import * as fs from 'fs';
import * as helmet from 'helmet';
import * as path from 'path';
import { AppModule } from './app.module';

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  preflightContinue: false,
  optionsSuccessStatus: 204,
  credentials: true
};

async function bootstrap() {
  const ssl = process.env.SSL === 'true' ? true : false;
  let httpsOptions = null;
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: ['log', 'error', 'debug', 'warn'],
    httpsOptions
  });

  app.useStaticAssets(path.join(__dirname, '..', 'assets'));
  app.setBaseViewsDir(path.join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  app.set('trust proxy', true);

  app.enableVersioning({
    type: VersioningType.MEDIA_TYPE,
    key: 'v=',
    defaultVersion: VERSION_NEUTRAL,
  });

  app.useGlobalPipes(
    new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        //disableErrorMessages: true,
  }));

  try {
    app.use(compression());
    app.disable("'x-powered-by'");

    // Set Content Security Policies
    const scriptSources = ["'self'", "'unsafe-inline'", "'unsafe-eval'"];
    const styleSources = ["'self'", "'unsafe-inline'"];
    const connectSources = ["'self'"];

    app.use(helmet.contentSecurityPolicy(
      {
        directives: {
        defaultSrc: ["'self'", "'unsafe-inline'"],
        scriptSrc: scriptSources,
        scriptSrcElem: scriptSources,
        styleSrc: styleSources,
        connectSrc: connectSources,
        }
      }
    ));

    app.use(helmet.crossOriginEmbedderPolicy());
    app.use(helmet.crossOriginOpenerPolicy());
    app.use(helmet.crossOriginResourcePolicy());
    app.use(helmet.dnsPrefetchControl());
    app.use(helmet.expectCt());
    app.use(helmet.frameguard());
    app.use(helmet.hidePoweredBy());
    app.use(helmet.hsts());
    app.use(helmet.ieNoOpen());
    app.use(helmet.noSniff());
    app.use(helmet.originAgentCluster());
    app.use(helmet.permittedCrossDomainPolicies());
    app.use(helmet.referrerPolicy());
    app.use(helmet.xssFilter());

    app.enableCors(corsOptions);

  } catch (error) {
    console.log('error', error);
  }

  const port = Number(process.env.PORT) || 80;
  const hostname = process.env.HOSTNAME || '';
  console.log(`Application listen to: ${ hostname }:${ port }`);
  await app.listen(port, hostname);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
