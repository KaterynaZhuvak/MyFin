import { UserStore } from '@entities/user/model/user.store';

export class RootStore {
  UserStore: UserStore;
  constructor() {
    this.UserStore = new UserStore();
  }
}
