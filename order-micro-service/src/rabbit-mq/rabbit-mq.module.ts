import { Global, Module } from '@nestjs/common';
import { RabbitMqService } from './rabbit-mq.service';
@Global()
@Module({
  providers: [RabbitMqService],
  exports: [RabbitMqService],
})
export class RabbitMqModule {}
