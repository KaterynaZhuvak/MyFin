import { type ExpenseSubmitValuesInterface } from './expenseSubmitValues.interface';

export interface UseExpensesMutationHookResponse {
  isPending: boolean;
  onFormSubmit: (values: ExpenseSubmitValuesInterface) => void;
}
