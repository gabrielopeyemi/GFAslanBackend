import { TransactionsController } from './transaction/transactions.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [TransactionsController, AppController],
  providers: [AppService],
})
export class AppModule {}
