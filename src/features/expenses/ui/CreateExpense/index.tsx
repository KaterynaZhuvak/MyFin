import { Field, Form, Formik } from 'formik';
import { type FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useStore } from '@shared/lib/useStore';
import { Button } from '@shared/ui/Button';
import { Select } from '@shared/ui/Select';
import { AmountAndCurrency, Datepicker } from '@entities/expenses';
import { Icon } from '@shared/icons/Icon';
import { useExpensesMutation } from '@features/expenses/model';
import { type ExpenseSubmitValuesInterface } from '@features/expenses/interfaces';

const initialValues: ExpenseSubmitValuesInterface = {
  category: '',
  currency: '',
  amount: '',
  month: '',
  day: '',
  year: '',
  details: '',
};

export const CreateExpense: FC = () => {
  const { categoriesStore } = useStore();

  const categoriesOptions = categoriesStore.getCategories().map((category) => {
    return category.name;
  });

  const { mutation, onFormSubmit } = useExpensesMutation();

  return (
    <section>
      <div className='mb-24 mt-10 flex items-center gap-1'>
        <Icon
          name='arrow'
          className='size-[24px] rotate-90 tablet:size-[32px]'
        />

        <NavLink
          to='/expenses'
          className='text-[20px] font-semibold tablet:text-[30px]'
        >
          Back to All expenses
        </NavLink>
      </div>

      <Formik initialValues={initialValues} onSubmit={onFormSubmit}>
        <Form className='m-[0_auto] flex max-h-[932px] min-w-[300px] max-w-[90%] flex-col justify-center gap-10 rounded-[20px] bg-modal-background p-[16px] max-[1439px]:items-center tablet:min-w-[480px] desktop:ml-[136px] desktop:max-w-[746px] desktop:p-[64px_107px_104px_112px]'>
          <h1 className='text-center text-[24px] font-bold leading-10 desktop:text-[34px]'>
            New Expense
          </h1>

          <div className='flex w-full max-w-[526px] flex-col gap-3'>
            <label htmlFor='category' className=' text-[20px] text-white'>
              Category
            </label>

            <Select
              name='category'
              options={categoriesOptions}
              placeholder='Select a category'
              className='w-full max-w-[526px]'
            />
          </div>

          <div className='flex flex-col gap-3 tablet:flex-row tablet:items-end'>
            <Datepicker />

            <AmountAndCurrency />
          </div>

          <fieldset className='flex w-full max-w-[526px] flex-col gap-3'>
            <div className='flex flex-row items-end justify-between'>
              <label htmlFor='details' className='text-[20px] text-white'>
                Details
              </label>

              <p className='text-end text-[16px] text-[#9C9C9C]'>
                No more than 15 characters
              </p>
            </div>

            <Field
              as='textarea'
              name='details'
              id='details'
              placeholder='Enter the details of this expense. For example, the name of a cafe or store, time, etc.'
              className='h-[156px] w-full max-w-[526px] rounded-[15px] border border-white bg-transparent p-[25px_20px]'
            />
          </fieldset>

          <div className='w-full max-w-[526px]'>
            <Button
              title='Add Expense'
              isSubmit
              className='gradient mb-6 h-[72px] w-full max-w-[526px] rounded-[15px] text-[32px] font-bold'
              disabled={mutation.isPending}
            />

            <NavLink
              to='/expenses'
              className='flex h-[72px] w-full max-w-[526px] items-center justify-center rounded-[15px] border border-bright-green bg-transparent text-[32px] font-bold text-bright-green hover:shadow-[0_0_2px_2px_#3ccea1]'
            >
              Cancel
            </NavLink>
          </div>
        </Form>
      </Formik>
    </section>
  );
};
