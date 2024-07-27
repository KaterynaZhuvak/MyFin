import type { FC, PropsWithChildren } from 'react';

export const AuthFormContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      className='
      m-auto
      flex
      w-auto
      flex-col
      justify-center
      gap-[32px] 
      rounded-[20px] 
      border
      bg-black
      p-[32px_0_72px_0]
      mobile:max-w-[343px]
      tablet:max-w-[526px]
      desktop:m-0
      desktop:ml-auto
      desktop:mr-[10%]
      '
    >
      {children}
    </div>
  );
};
