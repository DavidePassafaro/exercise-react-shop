import { User } from "@shared/models";
import { PB } from "./pocketbase.api";

export function login({ username, password }: User) {
  return PB.admins.authWithPassword(username, password);
}

export function logout() {
  return PB.authStore.clear();
}

export function getToken() {
  return PB.authStore.token;
}

export function isLogged() {
  return PB.authStore.isValid;
}
