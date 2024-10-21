import { Field, useFormikContext } from 'formik';
import { type FC } from 'react';
import { Select } from '@shared/ui/Select';
import { useStore } from '@shared/lib/useStore';
import { cn } from '@shared/lib/cn';

interface ContextProps {
  amount: string;
  currency: string;
}

export const AmountAndCurrency: FC = () => {
  const { currenciesStore } = useStore();
  const { errors, touched } = useFormikContext<ContextProps>();
  const isErrorOrTouched =
    touched.amount && errors.amount && touched.currency && errors.currency;
  const currencies = currenciesStore
    .getCurrencies()
    .map((currency) => currency.name);
  const fieldBaseClass = 'h-[64px] w-full border bg-transparent p-[0_0_0_10px]';

  return (
    <div className='flex min-w-[214px] flex-col justify-end'>
      <label htmlFor='currency' className='mb-3 text-[20px] text-white'>
        Amount
      </label>
      <div className='flex'>
        <div className='flex w-full flex-col'>
          <Field
            type='text'
            name='amount'
            id='amount'
            placeholder='1000'
            className={cn(
              `${fieldBaseClass} rounded-[15px] rounded-r-none border-r-0 p-[0_10px_0_20px] tablet:min-w-[106px] desktop:max-w-[106px]`,
              errors.amount && 'border-red-500'
            )}
          />
        </div>
        <Select
          placeholder='UAH'
          name='currency'
          inputClassName='rounded-l-none border-l-0'
          className='w-[106px] min-w-[106px]'
          options={currencies}
        />
      </div>
      {isErrorOrTouched ? (
        <span className='text-red-500'>{errors.amount ?? errors.currency}</span>
      ) : null}
    </div>
  );
};
