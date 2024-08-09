import { Field } from 'formik';
import { type FC } from 'react';
import { currencyOptions } from '@entities/expenses/constants/currency-options.constant';
import { Select } from '@shared/ui/Select';

export const AmountAndCurrency: FC = () => {
  return (
    <fieldset className='flex flex-row '>
      <div className='max-w-[106px]'>
        <label htmlFor='currency' className='text-[20px] text-white'>
          Amount
        </label>
        <Field
          type='text'
          name='amount'
          id='amount'
          placeholder='1000'
          className='h-[64px] max-w-[106px] rounded-[15px] rounded-r-none border border-r-0 border-white bg-transparent p-[0_10px_0_20px]'
        />
      </div>
      <Select
        placeholder='UAH'
        name='currency'
        inputClassName='rounded-l-none border-l-0'
        className='flex w-[106px] items-end'
        options={currencyOptions}
      />
    </fieldset>
  );
};
