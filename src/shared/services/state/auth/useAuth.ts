import { User } from "@shared/models";
import { create } from "zustand";
import * as AuthApi from "../../api/auth.api";

export interface AuthState {
  token: string | null;
  isLogged: boolean;
  error: string | null;
  login: (user: User) => Promise<unknown>;
  logout: () => void;
}

export const useAuth = create<AuthState>((set) => {
  return {
    token: AuthApi.getToken(),
    isLogged: AuthApi.isLogged(),
    error: null,
    login: (user: User) => {
      set({ isLogged: false, error: null });

      return AuthApi.login(user)
        .then(() =>
          set({ token: AuthApi.getToken(), isLogged: true, error: null })
        )
        .catch(() =>
          set({ token: null, isLogged: false, error: "User does not exist!!!" })
        );
    },
    logout: () => {
      AuthApi.logout();
      set({ token: null, isLogged: false, error: null });
    },
  };
});
