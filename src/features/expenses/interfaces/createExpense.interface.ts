import { type ExpenseInterface } from '@entities/expenses/interfaces';

export type CreateExpenseInterface = Omit<
  ExpenseInterface,
  '_id' | 'createdAt' | 'updatedAt'
>;
