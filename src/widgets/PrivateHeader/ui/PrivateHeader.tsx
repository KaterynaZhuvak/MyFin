import type { FC } from 'react';
import { useNavigate } from 'react-router';
import { Icon } from '@shared/icons/Icon';

export const PrivateHeader: FC = () => {
  const navigate = useNavigate();

  const handleClickIcon = (): void => {
    navigate('/');
  };

  return (
    <header className='flex h-[104px] w-full items-center justify-between bg-[#060606]'>
      <Icon
        name='logo'
        className='ml-[106px] h-[inherit] w-[186px] cursor-pointer'
        onClick={handleClickIcon}
      />
    </header>
  );
};
