import { type FC } from 'react';
import { observer } from 'mobx-react';
import { useStore } from '@shared/lib/useStore';

export const ExpensesTotalMoneyAmount: FC = observer(() => {
  const { expensesStore } = useStore();

  return (
    <h2 className='m-[40px_0] text-[16px] font-bold leading-10 tablet:text-[24px]'>
      In Total for this period:{' '}
      <span className='text-[#AE6B6B]'>{expensesStore.getAmount()} $</span>
    </h2>
  );
});
