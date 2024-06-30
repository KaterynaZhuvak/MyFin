import { useNavigate } from 'react-router-dom';
import { useStore } from '@shared/lib/useStore';
import type { LoginOptions } from '../login/interfaces/login-options.interface';
import type { RegistrationOptions } from '../registaion/interfaces/registaion-options.interface';
import { login } from '../login/api/login.api';
import { registration } from '../registaion/api/registration.api';
import type { AuthResponse } from '../interfaces/auth-response.interface';
import { setCookies } from './setCookies';

interface UseAuthReturnType {
  handleSubmitLogin: (values: LoginOptions) => Promise<void>;
  handleSubmitRegistration: (values: RegistrationOptions) => Promise<void>;
}

export const useAuth = (): UseAuthReturnType => {
  const navigate = useNavigate();
  const { userStore } = useStore();

  const handleResponse = (
    response: AuthResponse,
    refreshTokenExpires: number
  ): void => {
    userStore.setUserData(response.user);
    setCookies(
      response.accessToken,
      response.refreshToken,
      refreshTokenExpires
    );
    navigate('/expenses');
  };

  const handleSubmitLogin = async (values: LoginOptions): Promise<void> => {
    if (!values.email || !values.password) {
      return;
    }
    const response = await login(values.email, values.password);
    handleResponse(response, 30);
  };

  const handleSubmitRegistration = async (
    values: RegistrationOptions
  ): Promise<void> => {
    const response = await registration(
      values.firstName,
      values.lastName,
      values.email,
      values.password
    );
    handleResponse(response, 7);
  };

  return {
    handleSubmitLogin,
    handleSubmitRegistration,
  };
};
