export interface ExpenseInterface {
  _id: string;
  category: {
    _id: string;
    name: string;
  };
  currency: {
    _id: string;
    name: string;
    symbol: string;
    exchangeRate: number;
  };
  amount: number;
  createdAt: Date;
  updatedAt: Date;
  date: string;
  details: string;
}
