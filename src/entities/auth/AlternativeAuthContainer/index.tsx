import type { PropsWithChildren, FC } from 'react';

export const AlternativeAuthContainer: FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <div className='mt-[40px] flex flex-wrap justify-center gap-[32px]'>
      {children}
    </div>
  );
};
