import type { ExpenseInterface } from './expense.interface';

export interface ExpensesResponse {
  expenses: ExpenseInterface[];
  totalAmount: number;
  sum: number;
}
