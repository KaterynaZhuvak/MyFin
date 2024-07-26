import { makeAutoObservable } from 'mobx';

export class SidebarStore {
  public isOpen = true;

  constructor() {
    makeAutoObservable(this);
  }

  setIsOpen(opened: boolean): void {
    this.isOpen = opened;
  }
}
