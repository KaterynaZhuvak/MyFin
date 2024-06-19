import type { JSX } from 'react';
import { Icon } from '@shared/icons/Icon';
import { Button } from '@shared/ui/Button';

export const AppleButton = (): JSX.Element => {
  return (
    <Button
      disabled
      variant='outline'
      size='m'
      title='Continue with Apple'
      className='flex h-[64px] w-[372px] items-center justify-center gap-[16px] text-[20px]'
      iconPosition='start'
      icon={<Icon name='apple' className='h-[28px] w-[24px]' />}
    />
  );
};
