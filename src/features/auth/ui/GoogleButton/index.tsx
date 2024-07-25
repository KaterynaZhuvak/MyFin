import { type JSX } from 'react';
import { Icon } from '@shared/icons/Icon';
import { Button } from '@shared/ui/Button';

export const GoogleButton = (): JSX.Element => {
  return (
    <Button
      disabled
      variant='outline'
      size='m'
      title='Continue with Google'
      className='flex h-[56px] w-[318px] cursor-not-allowed items-center justify-center gap-[16px] text-[16px] tablet:h-[64px] tablet:w-[372px] tablet:text-[20px]'
      iconPosition='start'
      icon={<Icon name='google' className='size-[20px] tablet:size-[24px]' />}
    />
  );
};
