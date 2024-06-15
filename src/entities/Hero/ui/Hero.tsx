import { useNavigate } from 'react-router';
import type { FC } from 'react';
import { Button } from '@shared/ui/Button';

export const Hero: FC = () => {
  const navigate = useNavigate();

  return (
    <div className='flex h-[580px] flex-col justify-end bg-hero-mobile bg-auto bg-no-repeat max-[767px]:bg-[center_top_56px] tablet:h-[875px] tablet:justify-center tablet:bg-hero-desktop tablet:bg-top'>
      <div className='container '>
        <h1 className='mb-[30px] text-[25px] font-bold tracking-[0.01rem] tablet:w-[600px] tablet:text-[36px]'>
          MyFin — your daily assistant in financial matters
        </h1>
        <p className='mobile:hidden tablet:mb-[40px] tablet:block tablet:w-[480px] tablet:text-[24px] tablet:font-normal tablet:leading-[36px] tablet:tracking-normal'>
          Plan your budget wisely. Track your profits and your expenses. Analyze
          your finances easily and conveniently with MyFin.
        </p>
        <Button
          className='py-[4px] text-[32px] tracking-[0.04rem] max-[767px]:w-full tablet:px-[92px]'
          title='Get started'
          variant='gradient'
          size='xl'
          onClick={() => {
            navigate('/registration');
          }}
        />
      </div>
    </div>
  );
};
