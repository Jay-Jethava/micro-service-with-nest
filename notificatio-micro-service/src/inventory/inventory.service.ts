import { Injectable } from '@nestjs/common';
import { RabbitMqService } from 'src/rabbit-mq/rabbit-mq.service';

@Injectable()
export class InventoryService {
  constructor(private rabbitMQService: RabbitMqService) {}

  async onModuleInit() {
    this.rabbitMQService.subscribe(
      'inventory-update',
      this.updateInventory.bind(this),
    );
  }

  async updateInventory(order: object) {
    // Logic to update inventory based on the order details
    console.log('📝 updateInventory is called...');
  }
}
