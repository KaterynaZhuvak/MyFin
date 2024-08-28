import { type FC } from 'react';
import { observer } from 'mobx-react';
import { useExpensesTotalMoneyAmountQuery } from '@entities/expenses/model';

export const ExpensesTotalMoneyAmount: FC = observer(() => {
  const { isLoading, isError, data, error } =
    useExpensesTotalMoneyAmountQuery();

  return (
    <h2 className='m-[40px_0] text-[16px] font-bold leading-10 tablet:text-[24px]'>
      In Total for this period:{' '}
      {isError ? (
        <span className='text-[#AE6B6B]'>{error?.message}</span>
      ) : null}
      <span className='text-[#AE6B6B]'>
        {isLoading ? 'Loading...' : data} $
      </span>
    </h2>
  );
});
