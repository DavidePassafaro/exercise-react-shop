import { Order } from "@shared/models";
import { OrdersAction } from "./orders.actions";

export interface OrdersState {
  orders: Order[];
  pending: boolean;
  error: string | null;
}

export const ordersInitialState: OrdersState = {
  orders: [],
  pending: false,
  error: null,
};

export function ordersReducer(
  state: OrdersState,
  { type, payload }: OrdersAction
) {
  switch (type) {
    case "ordersGetSuccess":
      return { ...state, orders: payload, pending: false, error: null };

    case "orderDeleteSuccess":
      return {
        ...state,
        orders: [...state.orders.filter(({ id }) => id !== payload)],
        pending: false,
        error: null,
      };

    case "orderUpdateStatus": {
      const orders: Order[] = [...state.orders];
      const index: number = orders.findIndex(({ id }) => id === payload.id);
      if (index !== -1) orders.splice(index, 1, payload);
      return {
        ...state,
        orders,
        pending: false,
        error: null,
      };
    }

    case "pending":
      return { ...state, pending: payload, error: null };

    case "error":
      return { ...state, pending: false, error: payload };

    default:
      return state;
  }
}
