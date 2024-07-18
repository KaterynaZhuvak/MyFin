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
      className='flex h-[56px] w-[318px] items-center justify-center gap-[16px] text-[16px] tablet:h-[64px] tablet:w-[372px] tablet:text-[20px]'
      iconPosition='start'
      icon={
        <Icon
          name='apple'
          className='h-[24px] w-[20px] tablet:h-[28px] tablet:w-[24px]'
        />
      }
    />
  );
};
