import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const PORT = process.env.SERVER_PORT || 3001;
  const user = process.env.RABBITMQ_USER;
  const pass = process.env.RABBITMQ_PASS;
  const host = process.env.RABBITMQ_HOST;
  const queueName = process.env.RABBITMQ_QUEUE_NAME;
  await app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [`amqp://${user}:${pass}@${host}`],
      queue: queueName,
    },
  });
  await app.startAllMicroservices();

  // config for TCP
  // const PORT = process.env.SERVER_PORT || 3001;
  // await app.connectMicroservice<MicroserviceOptions>({
  //   transport: Transport.TCP,
  //   options: {
  //     port: configService.get('SERVER_PORT'),
  //   },
  // });

  // await app.listen(PORT);
}
bootstrap();
