import { type ExpenseInterface } from '@entities/expenses/interfaces';

export interface ExpensesByCategoryInterface {
  category: string;
  totalAmount: number;
  expenses: ExpenseInterface[];
}
