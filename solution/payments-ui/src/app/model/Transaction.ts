export type Transaction = {
  id: number;
  amount: number;
  country: String;
  currency: String;
  date: Date;
  orderId: String;
  taxCode: number;
  taxRate: number;
  type: String;

}

export enum TransactionType {
"visa"="visa",
"delta"="delta",
"mc" = "mc",
"mcdebit" = "mcdebit",
"unknown"="unknown",
"charges" = "charges",
"refund" = "refund",
"sale"="sale",
"repaid chargeback" = "repaid chargeback",
"chargeback" = "chargeback"
}
