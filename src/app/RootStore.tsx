import { NavigationStore } from '@features/home/NavigationList/model/navigation.store';

export class RootStore {
  navigationStore: NavigationStore;

  constructor() {
    this.navigationStore = new NavigationStore();
  }
}
