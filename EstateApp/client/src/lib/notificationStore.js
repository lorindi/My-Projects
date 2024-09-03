import { create } from "zustand";

export const useNotificationStore = create((set) => ({
  number: 0,
  fetch: async () => {
    const res = await apiRequest("/users/notification");
    set({ number: res.data });
  },
  decrease: () => {
    set((prev) => ({ number: prev.number - 1 }));
  },
  reset: () => {
    set({ number: 0 });
  },
}));
