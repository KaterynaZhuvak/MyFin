import { NavigationStore } from '@features/home/NavigationList/model/navigation.store';
import { UserStore } from '@entities/user/model/user.store';
import { SidebarStore } from '@widgets/Sidebar/model/sidebar.store';
import { ChartStore } from '@widgets/Chart/model/chart.store';

export class RootStore {
  userStore: UserStore;
  navigationStore: NavigationStore;
  sidebarStore: SidebarStore;
  chartStore: ChartStore;

  constructor() {
    this.userStore = new UserStore();
    this.navigationStore = new NavigationStore();
    this.sidebarStore = new SidebarStore();
    this.chartStore = new ChartStore();
  }
}
