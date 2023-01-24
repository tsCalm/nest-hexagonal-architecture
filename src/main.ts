import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const testArr = [1, 2, 3];
  const idx = testArr.findIndex((val) => val === 2);
  testArr.splice(idx, 1);
  console.log(testArr);
  const app = await NestFactory.create(AppModule);
  await app.listen(4000);
}
bootstrap();
