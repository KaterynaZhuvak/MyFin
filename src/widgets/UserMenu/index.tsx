import type { FC } from 'react';
import { AvatarComponent, UserPopoverContent } from '@entities/user';
import { useStore } from '@shared/lib/useStore';
import { Icon } from '@shared/icons/Icon';
import { PopoverComponent } from '@shared/ui/PopoverComponent';

export const UserMenu: FC = () => {
  const { userStore } = useStore();
  const user = userStore.getUserData();

  return (
    <PopoverComponent
      trigger={
        <div className='relative order-4 flex h-[56px] cursor-pointer flex-row items-center justify-center self-center justify-self-center tablet:justify-self-start '>
          <AvatarComponent />
          <span className='ml-[16px] hidden h-[24px] w-[97px] select-none text-[20px] desktop:block'>
            {user?.firstName} {user?.lastName}
          </span>
          <Icon
            name='arrow'
            className='absolute bottom-[9px] right-[-32px] hidden size-[32px] desktop:block'
          />
        </div>
      }
      content={<UserPopoverContent />}
    />
  );
};
