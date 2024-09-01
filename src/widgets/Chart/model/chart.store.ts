import { makeAutoObservable } from 'mobx';
import { type ExpenseInterface } from '../interfaces/expense.interface';
import { expensesApi } from '../api/chart.api';

export class ChartStore {
  chartData: ExpenseInterface[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  async loadChartData(): Promise<void> {
    this.chartData = await expensesApi();
  }
}
