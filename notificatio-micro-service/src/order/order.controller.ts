import { Body, Controller, Post } from '@nestjs/common';
import { OrderService } from './order.service';
import { RabbitMqService } from 'src/rabbit-mq/rabbit-mq.service';

@Controller('order')
export class OrderController {
  constructor(
    private orderService: OrderService,
    private rabbitMQService: RabbitMqService,
  ) {}

  @Post('/new-order')
  createOrder(@Body() body) {
    // Logic to to create order

    this.rabbitMQService.publish('inventory-update', body);
    this.rabbitMQService.publish('order-notification', body);

    return 'order placed';
  }
}
