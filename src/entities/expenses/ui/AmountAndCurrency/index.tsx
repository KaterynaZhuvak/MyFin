import { Field } from 'formik';
import { type FC } from 'react';
import { Select } from '@shared/ui/Select';
import { useStore } from '@shared/lib/useStore';

export const AmountAndCurrency: FC = () => {
  const { currenciesStore } = useStore();

  const currencyOptions = currenciesStore
    .getCurrencies()
    .map((currency) => currency.name);

  return (
    <fieldset className='flex flex-row items-end'>
      <div className='w-full max-w-[106px]'>
        <label htmlFor='currency' className='text-[20px] text-white'>
          Amount
        </label>

        <Field
          type='text'
          name='amount'
          id='amount'
          placeholder='1000'
          className='h-[64px] w-full max-w-[106px] rounded-[15px] rounded-r-none border border-r-0 border-white bg-transparent p-[0_10px_0_20px]'
        />
      </div>

      <Select
        placeholder='UAH'
        name='currency'
        inputClassName='rounded-l-none border-l-0'
        className='w-[106px] min-w-[106px]'
        options={currencyOptions}
      />
    </fieldset>
  );
};
