import type { FC } from 'react';
import { GetBack } from '@entities/not-found/GetBack';

export const NotFoundPage: FC = () => {
  return (
    <div className='container flex flex-col items-center justify-center gap-[80px] py-[150px] tablet:py-[200px] desktop:flex-row desktop:gap-[180px] desktop:py-[250px]'>
      <GetBack />
      <div className='h-[350px] w-[300px] bg-not-found bg-contain bg-center bg-no-repeat tablet:h-[502px] tablet:w-[446px]'>
        {' '}
      </div>
    </div>
  );
};
