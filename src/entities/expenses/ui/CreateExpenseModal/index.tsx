import { Field, Form, Formik } from 'formik';
import { type FC } from 'react';
import { Select } from '@shared/ui/Select';
import { expenseCategories } from '../../constants/category-options.constant';
import { currencyOptions } from '../../constants/currency-options.constant';

export const CreateExpenseModal: FC = () => {
  const handleOnSubmit = (): Promise<unknown> => {
    return fetch('http://localhost:3000');
  };
  return (
    <Formik initialValues={{}} onSubmit={handleOnSubmit} className=''>
      <Form className='m-[40px_0] flex flex-col gap-10'>
        <Select
          label='Category'
          name='category'
          options={expenseCategories}
          placeholder='Select a category'
          className='w-[526px]'
        />
        <div className='flex flex-row'>
          <Field
            type='text'
            name='money'
            id='money'
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
          name='text'
          id='text'
          placeholder='Enter the details of this expense. For example, the name of a cafe or store, time, etc.'
          className='h-[156px] w-[526px] rounded-[15px] border border-white bg-transparent p-[25px_20px]'
        />
      </Form>
    </Formik>
  );
};
