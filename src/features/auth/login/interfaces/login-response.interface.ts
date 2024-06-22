import type { User } from '@entities/user/interfaces/user.interface';

export interface LoginResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
}
