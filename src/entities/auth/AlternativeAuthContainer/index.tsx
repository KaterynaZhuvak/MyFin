import type { PropsWithChildren, FC } from 'react';

export const AlternativeAuthContainer: FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <div className='flex flex-wrap justify-center gap-[32px]'>{children}</div>
  );
};
