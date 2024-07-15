import type { FC } from 'react';
import { GoBack } from '@features/not-found/GoBack';
import notFound from '@shared/assets/images/not-found.png';

export const NotFoundPage: FC = () => {
  return (
    <div className='container flex flex-col items-center justify-center gap-[80px] py-[150px] tablet:py-[200px] desktop:flex-row desktop:gap-[140px] desktop:py-[250px]'>
      <GoBack />
      <img
        src={notFound}
        alt='not found'
        className='w-[300px] bg-cover bg-center bg-no-repeat tablet:w-[470px]'
      />
    </div>
  );
};
