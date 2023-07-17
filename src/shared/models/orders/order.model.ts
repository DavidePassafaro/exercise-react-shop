import { CartItem } from "./cart-item.model";

export interface OrderUser {
  name: string;
  email: string;
}

export enum OrderStatus {
  Pending = "pending",
  Done = "done",
}

export interface OrderForm {
  user: OrderUser;
  order: CartItem[];
  status: OrderStatus;
  total: number;
}
