import type { UserInterface } from '@entities/user/interfaces/user.interface';

export interface LoginResponse {
  user: UserInterface;
  accessToken: string;
  refreshToken: string;
}
