import { makeAutoObservable } from 'mobx';
import { axiosInstance } from '@shared/api/axios';

export interface ExpensesResponse {
  expenses: ExpenseInterface[];
}
export interface ExpenseInterface {
  _id: string;
  userId: string;
  category: string;
  currency: string;
  amount: number;
  details: string;
}

export const expensesApi = async (): Promise<ExpenseInterface[]> => {
  const response = await axiosInstance.get<ExpenseInterface[]>('/expenses');
  return response.data;
};

export class ChartStore {
  chartData: ExpenseInterface[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  async loadChartData(): Promise<void> {
    this.chartData = await expensesApi();
  }
}
