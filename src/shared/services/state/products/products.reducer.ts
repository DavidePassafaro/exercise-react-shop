import { Product } from "@shared/models";
import { ProductsAction } from "./products.actions";

export interface ProductsState {
  pending: boolean;
  products: Product[];
  error: string | null;
  activeItem: Partial<Product> | null;
}

export const productsInitialState: ProductsState = {
  pending: false,
  products: [],
  error: null,
  activeItem: null,
};

export function productsReducer(
  state: ProductsState,
  { type, payload }: ProductsAction
) {
  switch (type) {
    case "pending":
      return { ...state, pending: payload, error: null };

    case "productsGetSuccess":
      return { ...state, pending: false, products: payload, error: null };

    case "productDeleteSuccess":
      return {
        ...state,
        pending: false,
        products: [...state.products.filter(({ id }) => id !== payload)],
        error: null,
        activeItem: state.activeItem?.id === payload ? null : state.activeItem,
      };

    case "productAddSuccess":
      return {
        ...state,
        pending: false,
        products: [...state.products, payload],
        error: null,
        activeItem: null,
      };

    case "productEditSuccess": {
      const products: Product[] = [...state.products];
      const index: number = products.findIndex(({ id }) => id === payload.id);
      if (index !== -1) products.splice(index, 1, payload);
      return {
        ...state,
        pending: false,
        products,
        error: null,
      };
    }

    case "productSetActive":
      return { ...state, activeItem: payload };

    case "error":
      return { ...state, pending: false, error: payload };

    default:
      return state;
  }
}
