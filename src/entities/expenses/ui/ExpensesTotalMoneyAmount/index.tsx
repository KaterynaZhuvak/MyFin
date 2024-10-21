import { observer } from 'mobx-react';
import { useExpensesTotalMoneyAmountQuery } from '@entities/expenses/model';

export const ExpensesTotalMoneyAmount = observer(() => {
  const { isLoading, isError, data, error } =
    useExpensesTotalMoneyAmountQuery();

  if (isLoading) {
    return null;
  }

  return (
    <h2 className='m-[40px_0] text-[16px] font-bold leading-10 tablet:text-[24px]'>
      In Total for this period:{' '}
      {isError ? (
        <span className='text-[#AE6B6B]'>{error?.message}</span>
      ) : (
        <span className='text-[#AE6B6B]'>{data} $</span>
      )}
    </h2>
  );
});
