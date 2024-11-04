// utils/localStorageUtils.ts

export const setLocalStorageItem = <T,>(key: string, value: T): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const getLocalStorageItem = <T,>(key: string): T | null => {
  if (typeof window !== "undefined") {
    const item = localStorage.getItem(key);
    console.log(item, "localStorage.getItem", typeof item);
    let validItem = null;
    try {
      if (!!!item) {
        validItem = null;
      } else {
        const parsed = JSON.parse(item) as T;
        if (parsed) {
          validItem = parsed;
        } else if (!!item?.trim()) {
          validItem = item as T;
        }
      }
    } catch (err) {
      console.error(err);
      if (!!item?.trim()) {
        validItem = item as T;
      }
    } finally {
      return validItem;
    }
  }
  return null;
};

export const removeLocalStorageItem = (key: string): void => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key);
  }
};
