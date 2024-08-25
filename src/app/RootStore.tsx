import { NavigationStore } from '@features/home/NavigationList/model/navigation.store';
import { UserStore } from '@entities/user/model/user.store';
import { SidebarStore } from '@widgets/Sidebar/model/sidebar.store';
import { ExpensesStore } from '@entities/expenses/model/expenses.store';
import { CategoriesStore } from '@entities/categories/model/categories.store';
import { CurrenciesStore } from '@entities/currencies/model/currencies.store';
import { AlertStore } from '@entities/alert/model/alert.store';

export class RootStore {
  userStore: UserStore;
  navigationStore: NavigationStore;
  sidebarStore: SidebarStore;
  expensesStore: ExpensesStore;
  categoriesStore: CategoriesStore;
  currenciesStore: CurrenciesStore;
  alertStore: AlertStore;

  constructor() {
    this.userStore = new UserStore();
    this.navigationStore = new NavigationStore();
    this.sidebarStore = new SidebarStore();
    this.expensesStore = new ExpensesStore();
    this.categoriesStore = new CategoriesStore();
    this.currenciesStore = new CurrenciesStore();
    this.alertStore = new AlertStore();
  }
}
