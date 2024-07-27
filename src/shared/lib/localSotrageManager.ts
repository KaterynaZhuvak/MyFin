class LocalStorageManager {
  setItem(key: string, value: unknown): void {
    if (typeof value !== 'string') {
      const stringifiedValue = JSON.stringify(value);
      localStorage.setItem(key, stringifiedValue);
    } else if (typeof value === 'string') {
      localStorage.setItem(key, value);
    }
  }

  getItem(key: string): string | null {
    const value = localStorage.getItem(key);
    if (value === null) {
      return null;
    }
    JSON.parse(value);
    return value;
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}
export const localStorageManager = new LocalStorageManager();
