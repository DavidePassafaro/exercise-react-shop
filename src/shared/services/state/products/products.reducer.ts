import { Product } from "@shared/models";
import { ProductsAction } from "./products.actions";

export interface ProductsState {
  products: Product[];
  activeItem: Partial<Product> | null;
  pending: boolean;
  error: string | null;
}

export const productsInitialState: ProductsState = {
  products: [],
  activeItem: null,
  pending: false,
  error: null,
};

export function productsReducer(
  state: ProductsState,
  { type, payload }: ProductsAction
) {
  switch (type) {
    case "productsGetSuccess":
      return { ...state, products: payload, pending: false, error: null };

    case "productDeleteSuccess":
      return {
        ...state,
        products: [...state.products.filter(({ id }) => id !== payload)],
        activeItem: state.activeItem?.id === payload ? null : state.activeItem,
        pending: false,
        error: null,
      };

    case "productAddSuccess":
      return {
        ...state,
        products: [...state.products, payload],
        activeItem: null,
        pending: false,
        error: null,
      };

    case "productEditSuccess": {
      const products: Product[] = [...state.products];
      const index: number = products.findIndex(({ id }) => id === payload.id);
      if (index !== -1) products.splice(index, 1, payload);
      return {
        ...state,
        products,
        pending: false,
        error: null,
      };
    }

    case "productSetActive":
      return { ...state, activeItem: payload };

    case "pending":
      return { ...state, pending: payload, error: null };

    case "error":
      return { ...state, pending: false, error: payload };

    default:
      return state;
  }
}
