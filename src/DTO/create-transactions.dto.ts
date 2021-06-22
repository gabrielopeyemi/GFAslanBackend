export class CreateTransactionDto {
  packageName: string;
  driveName: string;
  senderName: string;
  senderAddress: string;
  receiverName: string;
  receiverAddress: string;
  when: string | number | Date;
}