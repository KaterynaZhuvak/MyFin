import { type FC } from 'react';
import { observer } from 'mobx-react';
import { useExpensesAmount } from '@entities/expenses/model';

export const ExpensesTotalMoneyAmount: FC = observer(() => {
  const { amount, isLoading } = useExpensesAmount();

  return (
    <h2 className='m-[40px_0] text-[16px] font-bold leading-10 tablet:text-[24px]'>
      In Total for this period:{' '}
      {isLoading ? (
        'Loading...'
      ) : (
        <span className='text-[#AE6B6B]'>{amount} $</span>
      )}
    </h2>
  );
});
