import { Field, Form, Formik } from 'formik';
import { type FC } from 'react';
import { NavLink } from 'react-router-dom';
import * as Yup from 'yup';
import { DateTime, Info } from 'luxon';
import { useStore } from '@shared/lib/useStore';
import { Button } from '@shared/ui/Button';
import { Select } from '@shared/ui/Select';
import { Icon } from '@shared/icons/Icon';
import { useExpensesMutation } from '@features/expenses/model';
import { type ExpenseSubmitValuesInterface } from '@features/expenses/interfaces';
import { AmountAndCurrency, Datepicker } from '@entities/expenses';
import { cn } from '@shared/lib/cn';

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
  const { categoriesStore, currenciesStore } = useStore();
  const { isPending, onFormSubmit } = useExpensesMutation();

  const validationSchema = Yup.object().shape({
    category: Yup.string()
      .oneOf(
        categoriesStore.getCategories().map((category) => category.name),
        'Invalid category'
      )
      .required('Required'),
    currency: Yup.string()
      .oneOf(
        currenciesStore.getCurrencies().map((currency) => currency.name),
        'Invalid currency'
      )
      .required('Required'),
    amount: Yup.string().required('Required'),
    month: Yup.string()
      .oneOf(Info.months(), 'Invalid month')
      .required('Required'),
    day: Yup.number()
      .min(1, 'Invalid day')
      .max(31, 'Invalid day')
      .required('Required'),
    year: Yup.number()
      .min(1984, 'Invalid year')
      .max(DateTime.now().year)
      .required('Required'),
    details: Yup.string().max(15, 'Too long').required('Required'),
  });

  return (
    <section className=' p-[8px_12px]'>
      <header className='mb-6 mt-2 flex items-center gap-1 desktop:mb-24 desktop:mt-10'>
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
      </header>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onFormSubmit}
      >
        {({ errors, touched }) => (
          <Form className='m-[0_auto] flex min-w-[300px] flex-col items-center justify-center gap-10 rounded-[20px] bg-modal-background p-[16px]  tablet:min-w-[480px] tablet:max-w-[746px] desktop:p-[64px_107px_104px_112px]'>
            <h1 className='text-center text-[24px] font-bold leading-10 desktop:text-[34px]'>
              New Expense
            </h1>

            <fieldset className='flex w-full max-w-[526px] flex-col'>
              <label htmlFor='category' className='mb-3 text-[20px] text-white'>
                Category
              </label>
              <Select
                name='category'
                options={categoriesStore
                  .getCategories()
                  .map((category) => category.name)}
                placeholder='Select a category'
                className='w-full'
              />
              {errors.category && touched.category ? (
                <p className='text-red-500'>{errors.category}</p>
              ) : null}
            </fieldset>

            <fieldset className='flex w-full max-w-[526px] flex-col gap-10 desktop:flex-row'>
              <Datepicker />
              <AmountAndCurrency />
            </fieldset>

            <fieldset className='flex w-full max-w-[526px] flex-col'>
              <div className='mb-3 flex items-end justify-between'>
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
                className={cn(
                  'h-[156px] w-full max-w-[526px] rounded-[15px] border border-white bg-transparent p-[25px_20px]',
                  errors.details && 'border-red-500'
                )}
              />
              {errors.details && touched.details ? (
                <p className='text-red-500'>{errors.details}</p>
              ) : null}
            </fieldset>

            <div className='w-full max-w-[526px]'>
              <Button
                title='Add Expense'
                isSubmit
                className='gradient mb-6 h-[72px] w-full max-w-[526px] rounded-[15px] text-[32px] font-bold'
                disabled={isPending}
              />
              <NavLink
                to='/expenses'
                className='flex h-[72px] w-full max-w-[526px] items-center justify-center rounded-[15px] border border-bright-green bg-transparent text-[32px] font-bold text-bright-green hover:shadow-[0_0_2px_2px_#3ccea1]'
              >
                Cancel
              </NavLink>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};
