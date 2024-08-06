import { Field, Form, Formik, type FormikValues } from 'formik';
import { type FC } from 'react';
import { useMutation } from '@tanstack/react-query';
import { queryClient } from '@shared/api/query-client';
import { useStore } from '@shared/lib/useStore';
import { Button } from '@shared/ui/Button';
import { Select } from '@shared/ui/Select';
import { type CreateExpenseInterface, addExpenseApi } from '@features/expenses';
import { expenseCategories } from '../../constants/category-options.constant';
import { currencyOptions } from '../../constants/currency-options.constant';

export const CreateExpenseModal: FC = () => {
  const { userStore } = useStore();
  const initialValues = {
    category: '',
    currency: '',
    amount: '',
    details: '',
  };
  const mutation = useMutation({
    mutationFn: addExpenseApi,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['expenses'] });
    },
  });

  const handleOnSubmit = (values: FormikValues): void => {
    const userId = userStore.getUserData()?._id;

    if (!userId) {
      return;
    }

    const { category, currency, amount, details } = values;

    const payload: CreateExpenseInterface = {
      userId,
      category: category as string,
      currency: currency as string,
      amount: Number(amount),
      details: details as string,
    };

    mutation.mutate(payload);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleOnSubmit}>
      <Form className='m-[40px_0] flex flex-col gap-10'>
        <Select
          name='category'
          options={expenseCategories}
          placeholder='Select a category'
          className='w-[526px]'
        />
        <div className='flex flex-row '>
          <Field
            type='text'
            name='amount'
            id='amount'
            placeholder='1000'
            className='h-[64px] w-[106px] rounded-[15px] rounded-r-none border border-r-0 border-white bg-transparent p-[0_10px_0_20px]'
          />
          <Select
            placeholder='UAH'
            name='currency'
            inputClassName='rounded-l-none border-l-0'
            className='w-[106px]'
            options={currencyOptions}
          />
        </div>
        <Field
          as='textarea'
          name='details'
          id='details'
          placeholder='Enter the details of this expense. For example, the name of a cafe or store, time, etc.'
          className='h-[156px] w-[526px] rounded-[15px] border border-white bg-transparent p-[25px_20px]'
        />
        <Button
          title='Add Expense'
          isSubmit
          className='gradient h-[72px] w-[526px] rounded-[15px] text-[32px] font-bold'
          disabled={mutation.isPending}
        />
      </Form>
    </Formik>
  );
};
