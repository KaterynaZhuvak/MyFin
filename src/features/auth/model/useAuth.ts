import { useNavigate } from 'react-router-dom';
import { useStore } from '@shared/lib/useStore';
import type {
  RegistrationOptions,
  AuthResponse,
  LoginOptions,
} from '../interfaces';
import { registrationApi, loginApi } from '../api';
import { setCookies } from './setCookies';

interface AuthReturnType {
  onLoginSubmit: (values: LoginOptions) => Promise<void>;
  onRegistrationSubmit: (values: RegistrationOptions) => Promise<void>;
}

export const useAuth = (): AuthReturnType => {
  const navigate = useNavigate();
  const { userStore } = useStore();

  const authenticateUser = (
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

  const onLoginSubmit = async (values: LoginOptions): Promise<void> => {
    if (!values.email || !values.password) {
      return;
    }
    const response = await loginApi(values.email, values.password);
    authenticateUser(response, 30);
  };

  const onRegistrationSubmit = async (
    values: RegistrationOptions
  ): Promise<void> => {
    const response = await registrationApi(
      values.firstName,
      values.lastName,
      values.email,
      values.password
    );
    authenticateUser(response, 7);
  };

  return {
    onLoginSubmit,
    onRegistrationSubmit,
  };
};
