import { NewProduct, Product } from "@shared/models";
import { PB } from "./pocketbase.api";

export function get() {
  return PB.collection("products").getList<Product>();
}

export function remove(id: string) {
  return PB.collection("products").delete(id);
}

export function add(product: NewProduct) {
  return PB.collection("products").create<Product>(product);
}

export function edit(product: Product) {
  return PB.collection("products").update<Product>(product.id, product);
}
