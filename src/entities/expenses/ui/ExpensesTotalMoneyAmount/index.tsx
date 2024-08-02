import { useQuery } from '@tanstack/react-query';
import { Suspense, type FC } from 'react';
import { amountApi } from '@entities/expenses/api';

export const ExpensesTotalMoneyAmount: FC = () => {
  const { data, isError, error } = useQuery({
    queryKey: ['amount'],
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
      <Suspense fallback={<div>Loading...</div>}>
        In Total for this period:{' '}
        <span className='text-[#AE6B6B]'>{!data} $</span>
      </Suspense>
    </h2>
  );
};
