import type { User } from '@entities/user';

export interface AuthResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
}
