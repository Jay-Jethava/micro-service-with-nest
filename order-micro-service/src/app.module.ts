import { Module, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderModule } from './order/order.module';
import { RabbitMqModule } from './rabbit-mq/rabbit-mq.module';

@Module({
  imports: [OrderModule, RabbitMqModule],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
