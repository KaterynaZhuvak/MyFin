import { NavigationStore } from '@features/home/NavigationList/model/navigation.store';
import { UserStore } from '@entities/user/model/user.store';
import { SidebarStore } from '@widgets/Sidebar/model/sidebar.store';
import { ExpensesStore } from '@entities/expenses/model/expenses.store';

export class RootStore {
  userStore: UserStore;
  navigationStore: NavigationStore;
  sidebarStore: SidebarStore;
  expensesStore: ExpensesStore;

  constructor() {
    this.userStore = new UserStore();
    this.navigationStore = new NavigationStore();
    this.sidebarStore = new SidebarStore();
    this.expensesStore = new ExpensesStore();
  }
}
