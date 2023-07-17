import { AuthState } from "./useAuth";

export const selectAuthToken = ({ token }: AuthState) => token;

export const selectIsUserLogged = ({ isLogged }: AuthState) => isLogged;

export const selectAuthError = ({ error }: AuthState) => error;

export const selectLogin = ({ login }: AuthState) => login;

export const selectLogout = ({ logout }: AuthState) => logout;
