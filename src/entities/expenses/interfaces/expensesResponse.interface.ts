import type { ExpenseInterface } from './expense.interface';

export interface ExpensesResponse {
  expenses: ExpenseInterface[];
  totalCount: number;
}
