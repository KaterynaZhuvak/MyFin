import type { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from '@shared/icons/Icon';
import { NavigationList } from '@features/NavigationList';
import { Button } from '@shared/ui/Button';

export const Header: FC = () => {
  return (
    <header className='relative bg-header-background'>
      <div className='container flex items-center justify-between py-[15px] tablet:py-[31px]'>
        <NavLink to='/'>
          <Button
            title='Login'
            variant='withoutOutline'
            className='h-[34px] w-[151px] cursor-pointer tablet:h-[41px] tablet:w-[183px]'
          />
        </NavLink>
        <NavLink to='/'>
          <Icon
            name='logo'
            className='h-[34px] w-[151px] cursor-pointer tablet:h-[41px] tablet:w-[183px]'
          />
        </NavLink>
        <NavigationList />
      </div>
    </header>
  );
};
