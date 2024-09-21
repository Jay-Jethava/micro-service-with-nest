import { Module, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotificationModule } from './notification/notification.module';
import { RabbitMqModule } from './rabbit-mq/rabbit-mq.module';

@Module({
  imports: [NotificationModule, RabbitMqModule],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
