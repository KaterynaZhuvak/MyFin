import { makeAutoObservable } from 'mobx';

export class SidebarStore {
  public isOpen = true;

  constructor() {
    makeAutoObservable(this);
  }

  setIsOpen(): void {
    this.isOpen = false;
  }

  getIsOpen(): boolean {
    return this.isOpen;
  }
}
