import { Field, Form, Formik, type FormikValues } from 'formik';
import { type FC } from 'react';
import { useMutation } from '@tanstack/react-query';
import { NavLink } from 'react-router-dom';
import { queryClient } from '@shared/api/query-client';
import { useStore } from '@shared/lib/useStore';
import { Button } from '@shared/ui/Button';
import { Select } from '@shared/ui/Select';
import { type CreateExpenseInterface } from '@features/expenses';
import { expenseCategories } from '@entities/expenses/constants/category-options.constant';
import { AmountAndCurrency, Datepicker } from '@entities/expenses';
import { Icon } from '@shared/icons/Icon';
import { addExpenseApi } from '@features/expenses/api';

const initialValues = {
  category: '',
  currency: '',
  amount: '',
  month: '',
  day: '',
  year: '',
  details: '',
};

export const CreateExpense: FC = () => {
  const { userStore } = useStore();

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
    <section>
      <div className='mb-24 mt-10 flex items-center gap-1'>
        <Icon name='arrow' className='size-[32px] rotate-90' />
        <NavLink to='/expenses' className='text-[30px] font-semibold'>
          Back to All expenses
        </NavLink>
      </div>
      <Formik initialValues={initialValues} onSubmit={handleOnSubmit}>
        <Form className='ml-[136px] flex max-h-[932px] max-w-[746px] flex-col gap-10 rounded-[20px] bg-modal-background p-[64px_107px_104px_112px]'>
          <h1 className='text-center text-[34px] font-bold leading-10'>
            New Expense
          </h1>
          <div className='flex flex-col gap-3'>
            <label htmlFor='category' className=' text-[20px] text-white'>
              Category
            </label>
            <Select
              name='category'
              options={expenseCategories}
              placeholder='Select a category'
              className='w-[526px]'
            />
          </div>
          <div className='flex flex-row items-end gap-3'>
            <Datepicker />
            <AmountAndCurrency />
          </div>
          <fieldset className='flex flex-col gap-3'>
            <div className='flex flex-row items-end justify-between'>
              <label htmlFor='details' className='text-[20px] text-white'>
                Details
              </label>
              <p className='text-end text-[16px] text-[#9C9C9C]'>
                No more than 100 characters
              </p>
            </div>
            <Field
              as='textarea'
              name='details'
              id='details'
              placeholder='Enter the details of this expense. For example, the name of a cafe or store, time, etc.'
              className='h-[156px] w-[526px] rounded-[15px] border border-white bg-transparent p-[25px_20px]'
            />
          </fieldset>
          <div>
            <Button
              title='Add Expense'
              isSubmit
              className='gradient mb-6 h-[72px] w-[526px] rounded-[15px] text-[32px] font-bold'
              disabled={mutation.isPending}
            />
            <NavLink
              to='/expenses'
              className='flex h-[72px] w-[526px] items-center justify-center rounded-[15px] border border-bright-green bg-transparent text-[32px] font-bold text-bright-green'
            >
              Button
            </NavLink>
          </div>
        </Form>
      </Formik>
    </section>
  );
};
