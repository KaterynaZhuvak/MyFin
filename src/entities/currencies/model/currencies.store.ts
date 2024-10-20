import { makeAutoObservable } from 'mobx';
import { type Currency } from '../interfaces';

export class CurrenciesStore {
  private currencies: Currency[] = [];
  private localCurrency = '$';

  constructor() {
    makeAutoObservable(this);
  }

  getCurrencies(): Currency[] {
    return this.currencies;
  }

  setCurrencies(currencies: Currency[]): void {
    this.currencies = currencies;
  }

  getCurrencyIdByName(name: string): string {
    const currency = this.currencies.find((item) => item.name === name);
    return currency?._id ?? '';
  }

  setLocalCurrency(currency: string): void {
    this.localCurrency = currency;
  }

  getLocalCurrency(): string {
    return this.localCurrency;
  }
}
