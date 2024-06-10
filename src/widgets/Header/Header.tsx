import type { FC } from 'react';
import { useNavigate } from 'react-router';
import { Icon } from '../../shared/icons/Icon';
import { NavigationList } from '../../features/NavigationList';
import { Button } from '../../shared/ui/Button';

export const Header: FC = () => {
  const navigate = useNavigate();

  const changeURL = (): void => {
    navigate('/signin');
  };
  return (
    <header className='relative bg-header-background'>
      <div className='container flex items-center justify-between py-[15px] tablet:py-[31px]'>
        <Button title='Log in' variant='withoutOutline' onClick={changeURL} />
        <a href='/home'>
          <Icon
            name='logo'
            className='h-[34px] w-[151px] cursor-pointer tablet:h-[41px] tablet:w-[183px]'
          />
        </a>
        <NavigationList />
      </div>
    </header>
  );
};
