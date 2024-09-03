import { makeAutoObservable } from 'mobx';
import { type ExpenseInterface } from '../interfaces';

export class ExpensesStore {
  private expenses: ExpenseInterface[] = [];
  private amount = 0;

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
    return this.amount;
  }

  setAmount(amount: number): void {
    this.amount = amount;
  }
}
