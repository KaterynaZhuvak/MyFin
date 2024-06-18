import type { JSX, ReactNode } from 'react';

interface AuthFormContainerProps {
  children: ReactNode;
}

export const AuthFormContainer = ({
  children,
}: AuthFormContainerProps): JSX.Element => {
  return (
    <div
      className='
      flex
      h-auto
      w-[526px] 
      flex-col
      justify-center 
      rounded-[20px] 
      border
      bg-black
      p-[32px_0_72px_0]'
    >
      {children}
    </div>
  );
};
