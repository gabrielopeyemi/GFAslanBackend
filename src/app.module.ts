import { TransactionsController } from './transactions.controller';
import { EventsController } from './events.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [
    TransactionsController,
    EventsController, AppController],
  providers: [AppService],
})
export class AppModule { }
