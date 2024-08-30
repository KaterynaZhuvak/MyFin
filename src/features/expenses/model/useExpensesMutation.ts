import { useMutation } from '@tanstack/react-query';
import { DateTime, Info } from 'luxon';
import { queryClient } from '@shared/api/query-client';
import { useStore } from '@shared/lib/useStore';
import { addExpenseApi } from '../api';
import {
  type UseExpensesMutationHookResponse,
  type CreateExpenseInterface,
  type ExpenseSubmitValuesInterface,
} from '../interfaces';

export const useExpensesMutation = (): UseExpensesMutationHookResponse => {
  const { userStore, categoriesStore, currenciesStore } = useStore();

  const mutation = useMutation({
    mutationFn: addExpenseApi,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['expenses'] });
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
      category: categoryId,
      currency: currencyId,
      details,
      amount: Number(amount),
    };
    mutation.mutate(payload);
  };
  return { mutation, onFormSubmit };
};
