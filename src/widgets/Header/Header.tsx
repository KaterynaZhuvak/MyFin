import type { FC } from 'react';
import { Icon } from '../../shared/icons/Icon';
import { NavigationList } from '../../features/NavigationList';
import { Button } from '../../shared/ui/Button';
import { useChangeURL } from '../../shared/hooks/useChangeURL';

export const Header: FC = () => {
  const changeURL = useChangeURL();

  return (
    <header className='relative bg-header-background'>
      <div className='container flex items-center justify-between py-[15px] tablet:py-[31px]'>
        <Button
          title='Log in'
          variant='ghost'
          onClick={() => {
            changeURL('/signin');
          }}
        />
        <Icon
          name='logo'
          className='h-[34px] w-[151px] cursor-pointer tablet:h-[41px] tablet:w-[183px]'
          onClick={() => {
            changeURL('/');
          }}
        />
        <NavigationList />
      </div>
    </header>
  );
};
