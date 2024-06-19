import type { JSX } from 'react';
import { Icon } from '@shared/icons/Icon';
import { Button } from '@shared/ui/Button';

export const GoogleButton = (): JSX.Element => {
  return (
    <Button
      disabled
      variant='outline'
      size='m'
      title='Continue with Google'
      className='flex h-[64px] w-[372px] items-center justify-center gap-[16px] text-[20px]'
      iconPosition='start'
      icon={<Icon name='google' className='size-[24px]' />}
    />
  );
};
