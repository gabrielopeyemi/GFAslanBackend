import { Body } from '@nestjs/common';
import { Controller, Delete, Get, Patch, Post, Param } from '@nestjs/common';
import { CreateTransactionDto } from './DTO/create-transactions.dto';
import { UpdateTransactionDto } from './DTO/UpdateTransaction.dto';
import { Transactions } from './transaction.entity';

@Controller('/transaction')
export class TransactionsController {
  private transactions: Transactions[] = [];

  @Get(':id')
  findOne(@Param('id') id) {
    const Transaction = this.transactions.find(transaction => transaction.id === parseInt(id));
    return Transaction;
  }

  @Get()
  findAll() {
    
    return this.transactions;
  }

  @Post()
  create(@Body() input: CreateTransactionDto) {
    const Transaction = {
      ...input,
      when: new Date(input.when),
      id: this.transactions.length + 1
    };
    this.transactions.push(Transaction);
    return {...Transaction, status: "success"};
  }

  @Patch(':id')
  update(@Param('id') id, @Body() input: UpdateTransactionDto) {
    const index = this.transactions.findIndex(transaction => transaction.id === parseInt(id))

    this.transactions[index] = {
      ...this.transactions[index],
      ...input,
      when: input.when ? new Date(input.when) : this.transactions[index].when
  }
    return this.transactions[index];
  }

  @Delete(':id')
  delete(@Param('id') id) {
    this.transactions = this.transactions.filter(
      e => e.id !==  parseInt(id)
    )
    return 'deleted!';
  }
}
