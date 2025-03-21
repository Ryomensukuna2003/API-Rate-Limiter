import { create } from "zustand";

const useAuthStore = create((set) => ({
  token: localStorage.getItem("token") || null,
  login: (token) => {
    localStorage.setItem("token", token);
    set({ token });
  },
  logout: () => {
    localStorage.removeItem("token");
    set({ token: null });
  },
  initializeAuth: () => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) set({ token: storedToken });
  },
}));

export default useAuthStore;
