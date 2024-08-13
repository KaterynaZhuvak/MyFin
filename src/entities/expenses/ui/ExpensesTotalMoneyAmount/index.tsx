import { useQuery } from '@tanstack/react-query';
import { type FC } from 'react';
import { amountApi } from '@entities/expenses/api';
import { useStore } from '@shared/lib/useStore';

export const ExpensesTotalMoneyAmount: FC = () => {
  const { userStore } = useStore();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['expenses', { type: 'amount' }],
    queryFn: async () => {
      const userId = userStore.getUserData()?._id;
      if (!userId) return;
      return amountApi(userId);
    },
  });

  if (isError) {
    return (
      <div>
        Error: {error instanceof Error ? error.message : 'An error occurred'}
      </div>
    );
  }

  return (
    <h2 className='m-[40px_0] text-[16px] font-bold leading-10 tablet:text-[24px]'>
      In Total for this period:{' '}
      {isLoading ? (
        'Loading...'
      ) : (
        <span className='text-[#AE6B6B]'>{data?.data} $</span>
      )}
    </h2>
  );
};
