import { type ExpenseInterface } from '@entities/expenses/interfaces';

interface FD {
  categoryId: string;
  currencyId: string;
}
type DF = Omit<
  ExpenseInterface,
  '_id' | 'createdAt' | 'updatedAt' | 'category' | 'currency'
>;
export type CreateExpenseInterface = FD & DF;
