import type { FC } from 'react';
import { useNavigate } from 'react-router';
import { Button } from '@shared/ui/Button';

export const GoBack: FC = () => {
  const navigate = useNavigate();

  const handleClick = (): void => {
    navigate(-1);
  };
  return (
    <div className='max-[1439px]:flex max-[1439px]:flex-col max-[1439px]:items-center max-[1439px]:justify-center'>
      <h2 className='mb-[8px] text-[28px] font-bold leading-[51px] tracking-[0.01rem] tablet:mb-[12px] tablet:text-[34px]'>
        Oops... We lost the page.
      </h2>
      <p className='mb-[25px] text-[20px] font-semibold leading-[36px] tracking-[0.01rem] max-[767px]:text-center tablet:mb-[32px] tablet:text-[24px]'>
        Try again later, we will need time to find her.
      </p>
      <Button
        title='Go back'
        variant='gradient'
        size='l'
        className='px-[80px] tablet:px-[92px]'
        onClick={handleClick}
      />
    </div>
  );
};
