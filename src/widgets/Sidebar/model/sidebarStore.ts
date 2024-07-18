import { makeAutoObservable } from 'mobx';

export class SidebarStore {
  private isOpen = false;

  constructor() {
    makeAutoObservable(this);
  }

  setIsOpen(): void {
    this.isOpen = !this.isOpen;
  }

  getIsOpen(): boolean {
    return this.isOpen;
  }
}
