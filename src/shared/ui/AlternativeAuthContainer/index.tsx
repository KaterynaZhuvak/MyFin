import type { JSX, ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

export const AlternativeAuthContainer = ({
  children,
}: ContainerProps): JSX.Element => {
  return (
    <div className='mt-[40px] flex flex-wrap justify-center gap-[32px]'>
      {children}
    </div>
  );
};
