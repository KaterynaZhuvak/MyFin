import type { FC } from 'react';
import * as Avatar from '@radix-ui/react-avatar';

interface AvatarProps {
  firstName: string | undefined;
}

export const AvatarComponent: FC<AvatarProps> = ({ firstName }) => {
  return (
    <Avatar.Root>
      <Avatar.Image
        alt='Avatar'
        className='size-[28px] overflow-hidden rounded-full tablet:size-[56px]'
      />
      <Avatar.Fallback className='flex size-[28px] items-center justify-center overflow-hidden rounded-full bg-sky-50 text-[12px] text-black tablet:size-[56px] tablet:text-[24px]'>
        {firstName ? firstName[0] : 'FC'}
      </Avatar.Fallback>
    </Avatar.Root>
  );
};
