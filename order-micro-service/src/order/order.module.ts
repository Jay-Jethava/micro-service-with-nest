import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
// import { RabbitMqService } from 'utils/rabbitmq-service';

@Module({
  providers: [OrderService],
  controllers: [OrderController],
})
export class OrderModule {}
