import { type ExpenseInterface } from '@entities/expenses/interfaces';

interface FD {
  category: string;
  currency: string;
}
type DF = Omit<
  ExpenseInterface,
  '_id' | 'createdAt' | 'updatedAt' | 'category' | 'currency'
>;
export type CreateExpenseInterface = FD & DF;
