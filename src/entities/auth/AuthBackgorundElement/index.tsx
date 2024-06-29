import type { FC, PropsWithChildren } from 'react';

export const AuthBackgroundElement: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      className='
      flex
      size-auto
      bg-[url(../../shared/assets/backgrounds/bg-auth.svg),_url(../../shared/assets/backgrounds/bg-auth-lines.svg)]
      bg-[length:1680px_1520px,_1400px_1080px]
      bg-[position:50%_10%,_50%_0]
      bg-repeat
      p-[73px_0_64px_0]'
    >
      <div className='m-[0_auto] flex w-[1440px] flex-row-reverse p-[0_182px]'>
        {children}
      </div>
    </div>
  );
};
