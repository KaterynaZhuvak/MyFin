import { makeAutoObservable } from 'mobx';
import { type ExpenseInterface } from '../interfaces';

export class ExpensesStore {
  private expenses: ExpenseInterface[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  getExpenses(): ExpenseInterface[] {
    return this.expenses;
  }

  setExpenses(expenses: ExpenseInterface[]): void {
    this.expenses = expenses;
  }

  removeExpense(expense: ExpenseInterface): void {
    this.expenses = this.expenses.filter((item) => item._id !== expense._id);
  }
}
