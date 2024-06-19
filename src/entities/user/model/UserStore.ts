import { makeAutoObservable } from 'mobx';
import type { UserData } from '../lib/UserData';

export class UserStore {
  private userData: UserData | null = null;
  private accessToken: string | null = null;
  private refreshToken: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setUserData(userData: UserData): void {
    this.userData = userData;
  }

  getUserData(): UserData | null {
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
