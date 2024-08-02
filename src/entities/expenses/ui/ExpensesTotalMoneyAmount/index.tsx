import { useQuery } from '@tanstack/react-query';
import { type FC } from 'react';
import { amountApi } from '@entities/expenses/api';

export const ExpensesTotalMoneyAmount: FC = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['expenses', { type: 'amount' }],
    queryFn: amountApi,
  });

  if (isError) {
    return (
      <div>
        Error: {error instanceof Error ? error.message : 'An error occurred'}
      </div>
    );
  }

  return (
    <h2 className='m-[40px_0] text-[24px] font-bold leading-10'>
      In Total for this period:{' '}
      {isLoading ? (
        'Loading...'
      ) : (
        <span className='text-[#AE6B6B]'>{data?.data} $</span>
      )}
    </h2>
  );
};
