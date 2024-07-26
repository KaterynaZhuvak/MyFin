import type { FC } from 'react';
import { Navigate, Outlet } from 'react-router';
import { cookieManager } from '@shared/lib/cookieManager';
import { setupAuthInterceptors } from '@features/auth/model/auth.interceptor';
import { axiosInstance } from '@shared/api/axios';
import { Sidebar } from '@widgets/Sidebar';
import { PrivateHeader } from '@widgets/PrivateHeader';
import { Icon } from '@shared/icons/Icon';
import { useStore } from '@shared/lib/useStore';

export const PrivateLayout: FC = () => {
  const { sidebarStore } = useStore();
  const token = cookieManager.getCookie('accessToken');

  setupAuthInterceptors(axiosInstance);

  if (!token) {
    return <Navigate to='/login' />;
  }

  const backToBtnStyles = `
  flex
  h-[18px]
  w-full
  cursor-pointer
  items-center
  gap-[4px]
  bg-inherit
  font-[12px]
  text-[#adadad]
  hover:text-[#ddd]
  hover:drop-shadow-[0_0px_2px_#888]
  tablet:hidden
  `;

  return (
    <>
      <PrivateHeader />
      <main className='flex size-full flex-row'>
        <Sidebar />

        <button
          className={backToBtnStyles}
          type='button'
          onClick={() => {
            sidebarStore.setIsOpen(true);
          }}
        >
          <Icon name='back-to' className='size-[16px]' /> Back to menu
        </button>

        <Outlet />
      </main>
    </>
  );
};
