import { Order, OrderForm, OrderStatus } from "@shared/models";
import { PB } from "./pocketbase.api";

export function get() {
  return PB.collection("orders").getList<Order>();
}

export function remove(id: string) {
  return PB.collection("orders").delete(id);
}

export function add(order: OrderForm) {
  return PB.collection("orders").create<Order>(order);
}

export function updateStatus(id: string, status: OrderStatus) {
  return PB.collection("orders").update<Order>(id, { status });
}
