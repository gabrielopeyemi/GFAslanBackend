import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TransactionDocument = Transaction & Document;

@Schema()
export class Transaction {
  @Prop()
  TransactionID: string;

  @Prop()
  packageName: string;

  @Prop()
  driveName: string;

  @Prop()
  senderName: string;

  @Prop()
  senderAddress: string;

  @Prop()
  receiverName: string;

  @Prop()
  receiverAddress: string;

  @Prop()
  when: any;
}

export const TransactionsSchema = SchemaFactory.createForClass(Transaction)