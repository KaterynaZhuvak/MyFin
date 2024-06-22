import { makeAutoObservable } from 'mobx';
import type { UserInterface } from '../interfaces/user.interface';

export class UserStore {
  private userData: UserInterface | null = null;
  private accessToken: string | null = null;
  private refreshToken: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setUserData(userData: UserInterface): void {
    this.userData = userData;
  }

  getUserData(): UserInterface | null {
    return this.userData;
  }

  setAccessToken(accessToken: string): void {
    this.accessToken = accessToken;
  }

  getAccessToken(): string | null {
    return this.accessToken;
  }

  setRefreshToken(refreshToken: string): void {
    this.refreshToken = refreshToken;
  }

  getRefreshToken(): string | null {
    return this.refreshToken;
  }
}
