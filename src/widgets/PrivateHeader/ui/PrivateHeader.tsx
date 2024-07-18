import type { FC } from 'react';
import { useNavigate } from 'react-router';
import { Icon } from '@shared/icons/Icon';
import { UserMenu } from '@widgets/UserMenu';
import { SearchComponent } from '@shared/ui/search';
import { SearchMenu } from '@entities/searchMenu';

export const PrivateHeader: FC = () => {
  const navigate = useNavigate();

  const handleClickIcon = (): void => {
    navigate('/');
  };

  return (
    <header
      className='grid h-[64px] w-full grid-cols-[0.4fr,0.3fr,2fr,0.5fr] bg-[#060606]
      tablet:h-[104px]
      tablet:grid-cols-[1fr,2fr,0.1fr,0.5fr]
      desktop:grid-cols-[1fr,2.5fr,0.1fr,0.8fr]
      '
    >
      <Icon
        name='logo'
        className='order-3 h-[34px] w-[151px] cursor-pointer self-center justify-self-center tablet:order-1 tablet:h-[60px] tablet:w-[186px]'
        onClick={handleClickIcon}
      />
      <SearchComponent />
      <Icon
        name='bell'
        className='tabet:justify-self-end order-2 size-[24px] cursor-pointer self-center justify-self-center tablet:order-3'
      />
      <UserMenu />
      <SearchMenu />
    </header>
  );
};
