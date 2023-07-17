import { Order } from "@shared/models";

export type OrdersGetSuccess = {
  type: "ordersGetSuccess";
  payload: Order[];
};

export type OrderDeleteSuccess = {
  type: "orderDeleteSuccess";
  payload: string;
};

export type OrderUpdateStatus = {
  type: "orderUpdateStatus";
  payload: Order;
};

export type Pending = {
  type: "pending";
  payload: boolean;
};

export type Error = {
  type: "error";
  payload: string;
};

export type OrdersAction =
  | OrdersGetSuccess
  | OrderDeleteSuccess
  | OrderUpdateStatus
  | Pending
  | Error;
