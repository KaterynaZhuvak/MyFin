import { makeAutoObservable } from 'mobx';
import { type ExpenseInterface } from '../interfaces';

export class ExpensesStore {
  private expenses: ExpenseInterface[] = [];
  private amount: number | null = null;
  private loading = true;

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

  getAmount(): number {
    return this.amount ?? 0;
  }

  setAmount(amount: number): void {
    this.amount = amount;
  }

  getLoading(): boolean {
    return this.loading;
  }

  setLoading(loading: boolean): void {
    this.loading = loading;
  }
}
