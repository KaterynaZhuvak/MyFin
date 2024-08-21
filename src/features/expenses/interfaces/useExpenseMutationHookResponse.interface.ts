import { type UseMutationResult } from '@tanstack/react-query';
import { type CreateExpenseInterface } from './createExpense.interface';
import { type ExpenseSubmitValuesInterface } from './expenseSubmitValues.interface';

export interface UseExpensesMutationHookResponse {
  mutation: UseMutationResult<
    CreateExpenseInterface,
    Error,
    CreateExpenseInterface
  >;
  onFormSubmit: (values: ExpenseSubmitValuesInterface) => void;
}
