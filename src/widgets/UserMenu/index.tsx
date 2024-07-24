import type { FC } from 'react';
import { AvatarComponent } from '@entities/user';
import { useStore } from '@shared/lib/useStore';
import { Icon } from '@shared/icons/Icon';
import { PopoverComponent } from '@shared/ui/PopoverComponent';
import { UserPopoverContent } from '../UserPopoverContent';

export const UserMenu: FC = () => {
  const { userStore } = useStore();
  const user = userStore.getUserData();

  return (
    <PopoverComponent
      trigger={
        <div className='user-popover relative order-4 flex h-[56px] cursor-pointer flex-row items-center justify-center self-center justify-self-center tablet:justify-self-start'>
          <AvatarComponent firstName={user?.firstName} />
          <span className='ml-[16px] hidden h-[24px] w-full select-none text-nowrap text-[20px] desktop:block'>
            {user?.firstName} {user?.lastName[0]}.
          </span>
          <Icon
            name='arrow'
            className='user-popover-arrow absolute bottom-[9px] right-[-32px] hidden size-[32px] desktop:block'
          />
        </div>
      }
      content={<UserPopoverContent />}
    />
  );
};
