import type { FC, PropsWithChildren } from 'react';
import { CustomAlert } from '@entities/alert';

export const AlertProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      {children}
      <CustomAlert />
    </>
  );
};
