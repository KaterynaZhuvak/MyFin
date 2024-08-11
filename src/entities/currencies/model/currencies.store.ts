import { makeAutoObservable } from 'mobx';
import { type Currency } from '../interfaces';

export class CurrenciesStore {
  private currencies: Currency[] = [];
  constructor() {
    makeAutoObservable(this);
  }

  getCurrencies(): Currency[] {
    return this.currencies;
  }

  setCurrencies(currencies: Currency[]): void {
    this.currencies = currencies;
  }
}
