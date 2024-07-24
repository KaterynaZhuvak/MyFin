import type { FC } from 'react';
import { useNavigate } from 'react-router';
import { cookieManager } from '@shared/lib/cookieManager';
import { useStore } from '@shared/lib/useStore';

export const LogoutButton: FC = () => {
  const navigate = useNavigate();
  const { userStore } = useStore();

  const handleLogout = (): void => {
    try {
      cookieManager.removeCookie('accessToken');
      cookieManager.removeCookie('refreshToken');
      userStore.clearUserData();
      navigate('/login');
    } catch (error) {
      //TODO: handle an error by throwing a toast message
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
