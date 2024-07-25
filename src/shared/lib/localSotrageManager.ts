class LSManager {
  private storage: Storage = window.localStorage;

  setItem(key: string, value: unknown): void {
    if (typeof value !== 'string') {
      const stringifiedValue = JSON.stringify(value);
      this.storage.setItem(key, stringifiedValue);
    } else if (typeof value === 'string') {
      this.storage.setItem(key, value);
    }
  }

  getItem(key: string): string | null {
    const value = this.storage.getItem(key);
    if (value === null) {
      return null;
    }
    JSON.parse(value);
    return value;
  }

  removeItem(key: string): void {
    this.storage.removeItem(key);
  }
}
export const LocalStorageManager = new LSManager();
