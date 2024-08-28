import { useMutation } from '@tanstack/react-query';
import { DateTime, Info } from 'luxon';
import { queryClient } from '@shared/api/query-client';
import { useStore } from '@shared/lib/useStore';
import { useAlert } from '@shared/lib/useAlert';
import { addExpenseApi } from '../api';
import {
  type UseExpensesMutationHookResponse,
  type CreateExpenseInterface,
  type ExpenseSubmitValuesInterface,
} from '../interfaces';

export const useExpensesMutation = (): UseExpensesMutationHookResponse => {
  const { userStore, categoriesStore, currenciesStore } = useStore();
  const { createAlert, updateAlert } = useAlert();

  const mutation = useMutation({
    mutationFn: addExpenseApi,
    onMutate: () => {
      createAlert('Creating expense...', 'pending');
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['expenses'] });
      updateAlert('Expense created successfully', 'success');
    },
    onError: () => {
      updateAlert('Expense creation failed', 'error');
    },
  });

  const onFormSubmit = (values: ExpenseSubmitValuesInterface): void => {
    const userId = userStore.getUserData()?._id;
    if (!userId) {
      return;
    }
    const { category, currency, amount, details, month, day, year } = values;
    const categoryId = categoriesStore.getCategoryIdByName(category);
    const currencyId = currenciesStore.getCurrencyIdByName(currency);

    const monthNumber = Info.months().indexOf(month) + 1;

    const date = DateTime.fromObject(
      {
        month: monthNumber,
        year: Number(year),
        day: Number(day),
      },
      { zone: 'utc' }
    ).toString();

    if (!date) {
      return;
    }
    const payload: CreateExpenseInterface = {
      userId,
      date,
      categoryId,
      currencyId,
      details,
      amount: Number(amount),
    };
    mutation.mutate(payload);
  };
  return { mutation, onFormSubmit };
};
