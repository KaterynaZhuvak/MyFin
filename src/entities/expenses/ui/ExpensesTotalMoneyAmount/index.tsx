import { useEffect, useState, type FC } from 'react';
import { observer } from 'mobx-react';
import { autorun } from 'mobx';
import { useStore } from '@shared/lib/useStore';

export const ExpensesTotalMoneyAmount: FC = observer(() => {
  const { expensesStore } = useStore();
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (expensesStore.getAmount() !== 0) {
      setLoading(false);
    }
    const disposer = autorun(() => {
      const updatedAmount = expensesStore.getAmount();
      setAmount(updatedAmount);
      if (updatedAmount !== 0) {
        setLoading(false);
      }
    });
    return () => {
      disposer();
    };
  }, [expensesStore]);

  return (
    <h2 className='m-[40px_0] text-[16px] font-bold leading-10 tablet:text-[24px]'>
      In Total for this period:{' '}
      {loading ? (
        'Loading...'
      ) : (
        <span className='text-[#AE6B6B]'>{amount} $</span>
      )}
    </h2>
  );
});
