import { makeAutoObservable } from 'mobx';
import { type Category } from '../interfaces';

export class CategoriesStore {
  private categories: Category[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  getCategories(): Category[] {
    return this.categories;
  }

  setCategories(categories: Category[]): void {
    this.categories = categories;
  }
}
