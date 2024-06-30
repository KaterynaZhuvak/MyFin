import { UserStore } from '@entities/user/model/user.store';

export class RootStore {
  userStore: UserStore;

  constructor() {
    this.userStore = new UserStore();
  }
}
