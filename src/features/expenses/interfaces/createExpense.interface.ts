import { type ExpenseInterface } from '@entities/expenses/interfaces';

interface ExpenseCategoryAndCurrency {
  categoryId: string;
  currencyId: string;
}

type ExpenseWithoutMetadata = Omit<
  ExpenseInterface,
  '_id' | 'createdAt' | 'updatedAt' | 'category' | 'currency'
>;

export type CreateExpenseInterface = ExpenseCategoryAndCurrency &
  ExpenseWithoutMetadata;
