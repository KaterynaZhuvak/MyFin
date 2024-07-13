import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@shared/icons/Icon';
import { Button } from '@shared/ui/Button';
import { NavigationList } from '@features/home/NavigationList';

export const Header: FC = () => {
  const navigate = useNavigate();

  return (
    <header className='relative bg-header-background'>
      <div className='container flex items-center justify-between py-[15px] tablet:py-[31px]'>
        <Button
          title='Log in'
          variant='ghost'
          onClick={() => {
            navigate('/login');
          }}
        />
        <Icon
          name='logo'
          className='h-[34px] w-[151px] cursor-pointer tablet:h-[41px] tablet:w-[183px]'
          onClick={() => {
            navigate('/');
          }}
        />
        <NavigationList />
      </div>
    </header>
  );
};
