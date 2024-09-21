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
    // < Logic to to create order >
    console.log('Order created successfully...');

    const order = {
      OrderId: 1,
      UserId: 5,
    };

    // -> send data to notification service
    this.rabbitMQService.publish('order-notification', order);

    return 'order placed';
  }
}
