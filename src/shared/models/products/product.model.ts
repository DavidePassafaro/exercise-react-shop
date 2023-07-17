import { PocketBaseBase } from "../pocketbase/pocketbase-base.model";

export interface Product extends PocketBaseBase {
  name: string;
  cost: number;
  description?: string;
  tmb?: string;
  img?: string;
}

export type NewProduct = Omit<Product, keyof PocketBaseBase>;
