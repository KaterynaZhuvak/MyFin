import type { ReactNode, JSX } from 'react';

interface AuthBackgroundElementProps {
  children: ReactNode;
}

export const AuthBackgroundElement = ({
  children,
}: AuthBackgroundElementProps): JSX.Element => {
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
