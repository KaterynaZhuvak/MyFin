import type { FC } from 'react';

export const Divider: FC = () => {
  return (
    <div className='m-[0_auto] mt-[40px] flex h-[41px] w-[378px] items-center justify-center gap-[12px]'>
      <div className='w-[165px] border-t border-white' />
      <span className='text-[20px]'>or</span>
      <div className='w-[165px] border-t border-white' />
    </div>
  );
};
