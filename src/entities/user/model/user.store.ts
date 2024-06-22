import { makeAutoObservable } from 'mobx';
import type { UserInterface } from '../interfaces/user.interface';

export class UserStore {
  private userData: UserInterface | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setUserData(userData: UserInterface): void {
    this.userData = userData;
  }

  getUserData(): UserInterface | null {
    return this.userData;
  }
}
