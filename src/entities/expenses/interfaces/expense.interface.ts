export interface ExpenseInterface {
  _id: string;
  userId: string;
  category: string;
  currency: string;
  amount: number;
  createdAt: Date;
  updatedAt: Date;
  details: string;
}
