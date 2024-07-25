import { makeAutoObservable } from 'mobx';
import { localStorageManager } from '@shared/lib/localSotrageManager';
import type { User } from '../interfaces/user.interface';

export class UserStore {
  private currentUser: User | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setUserData(userData: User): void {
    this.currentUser = userData;
    localStorageManager.setItem('user', userData);
  }

  getUserData(): User | null {
    if (!this.currentUser) {
      const userData = localStorageManager.getItem('user');
      if (userData) {
        this.currentUser = JSON.parse(userData) as User;
      }
    }
    return this.currentUser;
  }

  clearUserData(): void {
    localStorageManager.removeItem('user');
    this.currentUser = null;
  }
}
