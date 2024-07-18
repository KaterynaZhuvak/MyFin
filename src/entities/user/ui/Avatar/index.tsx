import type { FC } from 'react';
import * as Avatar from '@radix-ui/react-avatar';

export const AvatarComponent: FC = () => {
  return (
    <Avatar.Root>
      <Avatar.Image
        src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.6f5ZEeT1bM05vEOyFk2a7AHaHa%26pid%3DApi&f=1&ipt=ec86c13971d24b1d7fdbef577f33b49606ce3d6f8726cc3ee24686a2f20703bc&ipo=images'
        alt='Avatar'
        className='size-[24px] overflow-hidden rounded-full tablet:size-[56px]'
      />
      <Avatar.Fallback className='flex size-[24px] items-center justify-center overflow-hidden rounded-full bg-sky-50 text-black tablet:size-[56px]'>
        FC
      </Avatar.Fallback>
    </Avatar.Root>
  );
};
