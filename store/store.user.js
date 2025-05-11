import { create } from "zustand";

export const useUserStore = create((set) => ({
  isAuthenticated: false,
  updateAuth: (newState) => set({ isAuthenticated: newState })
}));
