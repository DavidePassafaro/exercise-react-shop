import { Order, OrderForm, OrderStatus } from "@shared/models";
import { useReducer } from "react";
import * as OrdersApi from "../../api/orders.api";
import { ordersInitialState, ordersReducer } from "./orders.reducer";

export function useOrdersService() {
  const [state, dispatch] = useReducer(ordersReducer, ordersInitialState);

  async function getOrders() {
    dispatch({ type: "pending", payload: true });
    try {
      const { items } = await OrdersApi.get();
      dispatch({ type: "ordersGetSuccess", payload: items });
    } catch (error) {
      dispatch({ type: "error", payload: "Orders not loaded" });
    }
  }

  async function deleteOrder(id: string) {
    dispatch({ type: "pending", payload: true });
    try {
      await OrdersApi.remove(id);
      dispatch({ type: "orderDeleteSuccess", payload: id });
    } catch (error) {
      dispatch({ type: "error", payload: "Order not deleted" });
    }
  }

  async function addOrder(order: OrderForm) {
    dispatch({ type: "pending", payload: true });
    try {
      return await OrdersApi.add(order);
    } catch (error) {
      dispatch({ type: "error", payload: "Order not added" });
      throw error;
    }
  }

  async function updateStatus(id: string, status: OrderStatus) {
    dispatch({ type: "pending", payload: true });
    try {
      const order: Order = await OrdersApi.updateStatus(id, status);
      dispatch({ type: "orderUpdateStatus", payload: order });
    } catch (error) {
      dispatch({ type: "error", payload: "Order status not edited" });
    }
  }

  return {
    state,
    actions: {
      getOrders,
      deleteOrder,
      addOrder,
      updateStatus,
    },
  };
}
