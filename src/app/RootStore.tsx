import { UserStore } from '@entities/user/model/UserStore';

export class RootStore {
  UserStore: UserStore;
  constructor() {
    this.UserStore = new UserStore();
  }
}
