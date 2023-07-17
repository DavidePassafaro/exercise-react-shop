import { PocketBaseBase } from "../pocketbase/pocketbase-base.model";

export interface NewProduct {
  name: string;
  cost: number;
  description?: string;
  img?: string;
}

export type Product = PocketBaseBase & NewProduct;
