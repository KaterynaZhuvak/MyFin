import type { FC } from 'react';
import { useNavigate } from 'react-router';
import { cookieManager } from '@shared/lib/cookieManager';
import { useStore } from '@shared/lib/useStore';

export const LogoutButton: FC = () => {
  const manager = cookieManager;
  const navigate = useNavigate();
  const { userStore } = useStore();

  const handleLogout = (): void => {
    try {
      manager.removeCookie('accessToken');
      manager.removeCookie('refreshToken');
      userStore.clearUserData();
      navigate('/login');
    } catch (error) {
      throw new Error(error as string);
    }
  };
  return (
    <button
      className='text-left text-[20px] font-bold text-white hover:text-[#1D664F]'
      type='submit'
      onClick={handleLogout}
    >
      Log Out
    </button>
  );
};
