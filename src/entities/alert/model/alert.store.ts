import { makeAutoObservable } from 'mobx';

export class AlertStore {
  private message = '';
  private isError = false;
  private isSuccess = false;
  private isPending = false;
  private isOpen = false;

  constructor() {
    makeAutoObservable(this);
  }

  setMessage(message: string): void {
    this.message = message;
  }

  setError(isError: boolean): void {
    this.isError = isError;
  }

  setSuccess(isSuccess: boolean): void {
    this.isSuccess = isSuccess;
  }

  setPending(isPending: boolean): void {
    this.isPending = isPending;
  }

  getMessage(): string {
    return this.message;
  }

  getIsError(): boolean {
    return this.isError;
  }

  getIsSuccess(): boolean {
    return this.isSuccess;
  }

  getIsPending(): boolean {
    return this.isPending;
  }

  getIsOpen(): boolean {
    return this.isOpen;
  }

  toggleIsOpen(): void {
    this.isOpen = !this.isOpen;
  }

  updateAlert(status: 'pending' | 'success' | 'error', message: string): void {
    this.message = message;
    this.isPending = status === 'pending';
    this.isSuccess = status === 'success';
    this.isError = status === 'error';
    this.isOpen = true;
  }
}
