export const storage = {
  get: (key: string) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch {
      return null;
    }
  },

  set: (key: string, value: unknown) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      console.error(`Failed to store ${key}`);
    }
  },

  remove: (key: string) => {
    try {
      localStorage.removeItem(key);
    } catch {
      console.error(`Failed to remove ${key}`);
    }
  },

  clear: () => {
    try {
      localStorage.clear();
    } catch {
      console.error('Failed to clear storage');
    }
  },
};
