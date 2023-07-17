import { Product } from "..";
import { PocketBaseBase } from "../pocketbase/pocketbase-base.model";

export enum OrderStatus {
  Pending = "pending",
  Done = "done",
}

export interface ProductsOrder {
  quantity: number;
  product: Product;
}

export interface Order extends PocketBaseBase {
  user: any;
  productsOrder: ProductsOrder[];
  status: OrderStatus;
}
