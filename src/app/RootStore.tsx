import { NavigationStore } from '@features/home/NavigationList/model/navigation.store';
import { UserStore } from '@entities/user/model/user.store';

export class RootStore {
  userStore: UserStore;
  navigationStore: NavigationStore;

  constructor() {
    this.userStore = new UserStore();
    this.navigationStore = new NavigationStore();
  }
}
