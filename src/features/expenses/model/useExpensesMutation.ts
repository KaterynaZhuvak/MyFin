import { useMutation, type UseMutationResult } from '@tanstack/react-query';
import { type FormikValues } from 'formik';
import { DateTime } from 'luxon';
import { queryClient } from '@shared/api/query-client';
import { useStore } from '@shared/lib/useStore';
import { monthOptions } from '@entities/expenses/constants/month-options.constant';
import { addExpenseApi } from '../api';
import { type CreateExpenseInterface } from '../interfaces';

interface UseExpensesMutationHookResponse {
  mutation: UseMutationResult<
    CreateExpenseInterface,
    Error,
    CreateExpenseInterface
  >;

  onFormSubmit: (values: FormikValues) => void;
}

export const useExpensesMutation = (): UseExpensesMutationHookResponse => {
  const { userStore } = useStore();

  const mutation = useMutation({
    mutationFn: addExpenseApi,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['expenses'] });
    },
  });

  const onFormSubmit = (values: FormikValues): void => {
    const userId = userStore.getUserData()?._id;
    if (!userId) {
      return;
    }
    const { category, currency, amount, details, month, day, year } = values;
    const monthNumber = monthOptions.indexOf(month as string) + 1;

    const date = DateTime.utc(
      Number(year),
      monthNumber,
      Number(day)
    ).toString();

    if (!date) {
      return;
    }

    const payload: CreateExpenseInterface = {
      userId,
      category: category as string,
      currency: currency as string,
      amount: Number(amount),
      date,
      details: details as string,
    };

    mutation.mutate(payload);
  };
  return { mutation, onFormSubmit };
};
