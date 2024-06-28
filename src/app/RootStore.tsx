import { NavigationStore } from '@features/home/NavigationList/model/navigation.store';

export class RootStore {
  NavigationStore: NavigationStore;

  constructor() {
    this.NavigationStore = new NavigationStore();
  }
}
