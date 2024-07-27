import type { FC, PropsWithChildren } from 'react';

export const AuthBackgroundElement: FC<PropsWithChildren> = ({ children }) => {
  return (
    <section
      className='
      bg-cover
      p-[88px_8px_96px_8px]
      desktop:bg-[url(../../shared/assets/backgrounds/bg-auth.svg),_url(../../shared/assets/backgrounds/bg-auth-lines.svg)]
      desktop:p-[66px_0_65px_0]
      '
    >
      {children}
    </section>
  );
};
