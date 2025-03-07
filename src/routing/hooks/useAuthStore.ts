import { create } from "zustand";

interface User {
  email: string;
  password: string;
}

interface AuthStoreType {
  user: User;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
}

const useAuthStore = create<AuthStoreType>((set) => ({
  user: {} as User,
  setEmail: (email) =>
    set((store) => ({
      user: { ...store.user, email: email },
    })),
  setPassword: (password) =>
    set((store) => ({
      user: { ...store.user, password: password },
    })),
}));

export default useAuthStore;
