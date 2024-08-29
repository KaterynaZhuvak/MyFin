import { Field } from 'formik';
import { type FC } from 'react';
import { Select } from '@shared/ui/Select';
import { useStore } from '@shared/lib/useStore';

export const AmountAndCurrency: FC = () => {
  const { currenciesStore } = useStore();

  return (
    <fieldset className='flex min-w-[214px] flex-col justify-end gap-3'>
      <label htmlFor='currency' className='text-[20px] text-white'>
        Amount
      </label>
      <div className='flex'>
        <Field
          type='text'
          name='amount'
          id='amount'
          placeholder='1000'
          className='h-[64px] w-full rounded-[15px] rounded-r-none border border-r-0 border-white bg-transparent p-[0_10px_0_20px] tablet:min-w-[106px] desktop:max-w-[106px]'
        />
        <Select
          placeholder='UAH'
          name='currency'
          inputClassName='rounded-l-none border-l-0'
          className='w-[106px] min-w-[106px]'
          options={currenciesStore
            .getCurrencies()
            .map((currency) => currency.name)}
        />
      </div>
    </fieldset>
  );
};
