export interface ExpenseInterface {
  _id: string;
  userId: string;
  categoryId: string;
  currencyId: string;
  amount: number;
  details: string;
  __v: number;
}
