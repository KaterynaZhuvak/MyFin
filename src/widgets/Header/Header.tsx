import type { FC } from 'react';
import { NavigationList } from '../../features/NavigationList/ui/NavigationList';
import { NavigationButton } from '../../shared/ui/NavigationButton/NavigationButton';
import { Icon } from '../../shared/icons/Icon';

export const Header: FC = () => {
  return (
    <header className='relative bg-header-background'>
      <div className='container flex items-center justify-between py-[15px] tablet:py-[31px]'>
        <NavigationButton title='Log in' variant='logInMobile' path='/signin' />
        <a href='/home'>
          <Icon
            name='logo'
            className='h-[34px] w-[151px] tablet:h-[41px] tablet:w-[183px]'
          />
        </a>
        <NavigationList />
      </div>
    </header>
  );
};
