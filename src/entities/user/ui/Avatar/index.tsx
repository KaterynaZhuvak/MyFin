import type { FC } from 'react';
import * as Avatar from '@radix-ui/react-avatar';

interface AvatarProps {
  firstName?: string;
  lastName?: string;
}

export const UserAvatar: FC<AvatarProps> = ({ firstName, lastName }) => {
  return (
    <Avatar.Root>
      <Avatar.Image
        alt='Avatar'
        className='size-[28px] overflow-hidden rounded-full tablet:size-[56px]'
      />
      <Avatar.Fallback className='flex size-[28px] select-none items-center justify-center overflow-hidden rounded-full bg-sky-50 text-[12px] text-black tablet:size-[56px] tablet:text-[24px]'>
        {firstName ? firstName[0] : 'F'}
        {lastName ? lastName[0] : 'C'}
      </Avatar.Fallback>
    </Avatar.Root>
  );
};
