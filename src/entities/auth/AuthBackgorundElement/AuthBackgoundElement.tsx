import type { FC, PropsWithChildren } from 'react';

export const AuthBackgroundElement: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      className='
      flex
      size-full
      justify-end
      bg-[url(../../shared/assets/backgrounds/bg-auth.svg),_url(../../shared/assets/backgrounds/bg-auth-lines.svg)]
      bg-[length:1680px_1520px,_1400px_1080px]
      bg-[position:50%_10%,_50%_0]
      bg-repeat
      p-[73px_182px_64px_0]'
    >
      {children}
    </div>
  );
};
