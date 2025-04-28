import { NestFactory } from '@nestjs/core';
import { ApiModule } from './api.module';
import {ValidationPipe} from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(ApiModule);
  app.useGlobalPipes(new ValidationPipe({transform: true}));
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
