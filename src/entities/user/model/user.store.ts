import { makeAutoObservable } from 'mobx';
import type { User } from '../interfaces/user.interface';

export class UserStore {
  private currentUser: User | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setUserData(userData: User): void {
    this.currentUser = userData;
  }

  getUserData(): User | null {
    return this.currentUser;
  }

  clearUserData(): void {
    this.currentUser = null;
  }
}
