import { NavigationStore } from '@features/home/NavigationList/model/navigation.store';
import { UserStore } from '@entities/user/model/user.store';
import { SidebarStore } from '@widgets/Sidebar/model/sidebar.store';
import { ChartStore } from '@widgets/Chart/model/chart.store';
import { ExpensesStore } from '@entities/expenses/model/expenses.store';
import { CategoriesStore } from '@entities/categories/model/categories.store';
import { CurrenciesStore } from '@entities/currencies/model/currencies.store';

export class RootStore {
  userStore: UserStore;
  navigationStore: NavigationStore;
  sidebarStore: SidebarStore;
  chartStore: ChartStore;
  expensesStore: ExpensesStore;
  categoriesStore: CategoriesStore;
  currenciesStore: CurrenciesStore;


  constructor() {
    this.userStore = new UserStore();
    this.navigationStore = new NavigationStore();
    this.sidebarStore = new SidebarStore();
    this.chartStore = new ChartStore();
    this.expensesStore = new ExpensesStore();
    this.categoriesStore = new CategoriesStore();
    this.currenciesStore = new CurrenciesStore();
  }
}
