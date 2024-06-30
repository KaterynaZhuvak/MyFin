import type { FC } from 'react';

export const AuthBackgroundElement: FC = () => {
  return (
    <div
      className='
      absolute
      inset-0
      top-[2%]
      z-[-1]
      hidden
      bg-[url(../../shared/assets/backgrounds/bg-auth.svg),_url(../../shared/assets/backgrounds/bg-auth-lines.svg)]
      bg-cover
      desktop:block
      '
    />
  );
};
