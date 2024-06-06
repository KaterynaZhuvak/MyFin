import type { FC } from 'react';
import { Logo } from '../../shared/ui/Logo/Logo';
import { NavigationList } from '../../features/NavigationList/NavigationList';
import { ButtonForNavigation } from '../../shared/ui/ButtonForNavigation/ButtonForNavigation';

export const Header: FC = () => {
  return (
    <header className='container relative flex items-center justify-between bg-[#151515] py-[15px] min-[768px]:py-[31px]'>
      <ButtonForNavigation
        title='Log in'
        styles='min-[768px]:hidden'
        path='/signin'
      />
      <Logo styles='w-[151px] h-[34px] min-[768px]:w-[183px] min-[768px]:h-[41px]' />
      <NavigationList />
    </header>
  );
};
