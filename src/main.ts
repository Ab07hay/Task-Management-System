import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
// import { ConfigService } from '@nestjs/config';
// import mongoose from 'mongoose';
const mongoose = require("mongoose");
const uri = 'mongodb+srv://abhaymanmode9991:vkqBIePaA9E3AuWm@cluster0.udemcbw.mongodb.net/Cluster0?retryWrites=true&w=majority'

import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  app.useGlobalPipes(
    new ValidationPipe({
      stopAtFirstError: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    })
    .then(() => {
    Logger.log(`CONNECTED TO DATABASE`)
    })
    .catch((e) => {
      console.log(e);
      console.log('connection reject');
    });
  // const config = app.get<ConfigService>(ConfigService);

  // const PORT = config.get('PORT');
  // const HOST = config.get('HOST');

  await app.listen(3000, '0.0.0.0', (_, address) =>
    Logger.log(`Listening on ${address}`),
  );
}
bootstrap();
