import { User } from "@shared/models";
import * as AuthService from "@shared/services/api/auth.api";
import { create } from "zustand";

export interface AuthState {
  token: string | null;
  isLogged: boolean;
  error: string | null;
  login: (user: User) => Promise<unknown>;
  logout: () => void;
}

export const useAuth = create<AuthState>((set) => {
  return {
    token: AuthService.getToken(),
    isLogged: AuthService.isLogged(),
    error: null,
    login: (user: User) => {
      set({ isLogged: false, error: null });

      return AuthService.login(user)
        .then(() =>
          set({ token: AuthService.getToken(), isLogged: true, error: null })
        )
        .catch(() =>
          set({ token: null, isLogged: false, error: "User does not exist!!!" })
        );
    },
    logout: () => {
      AuthService.logout();
      set({ token: null, isLogged: false, error: null });
    },
  };
});
