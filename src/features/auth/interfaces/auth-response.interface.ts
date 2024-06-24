import type { User } from '@entities/user/interfaces/user.interface';

export interface AuthResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
}
