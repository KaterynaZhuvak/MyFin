import { type ExpenseInterface } from '@entities/expenses/interfaces';

interface ExpenseCategoryAndCurrency {
  category: string;
  currency: string;
}

type ExpenseWithoutMetadata = Omit<
  ExpenseInterface,
  '_id' | 'createdAt' | 'updatedAt' | 'category' | 'currency'
>;

export type CreateExpenseInterface = ExpenseCategoryAndCurrency &
  ExpenseWithoutMetadata;
