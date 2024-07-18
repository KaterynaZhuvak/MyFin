import { NavigationStore } from '@features/home/NavigationList/model/navigation.store';
import { UserStore } from '@entities/user/model/user.store';
import { SidebarStore } from '@widgets/Sidebar/model/sidebarStore';

export class RootStore {
  userStore: UserStore;
  navigationStore: NavigationStore;
  sidebarStore: SidebarStore;

  constructor() {
    this.userStore = new UserStore();
    this.navigationStore = new NavigationStore();
    this.sidebarStore = new SidebarStore();
  }
}
