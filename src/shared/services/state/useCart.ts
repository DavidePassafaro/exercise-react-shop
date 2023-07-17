import { CartItem, Product } from "@shared/models";
import { create } from "zustand";

export interface CartState {
  list: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  increaseQty: (productId: string) => void;
  decreaseQty: (productId: string) => void;
  clearCart: () => void;
}

export const useCart = create<CartState>((set, get) => {
  function findProductIndexById(id: string) {
    return get().list.findIndex(({ product }: CartItem) => product.id === id);
  }

  return {
    list: [],
    addToCart: (product: Product) => {
      const found: boolean = findProductIndexById(product.id) !== -1;
      if (found) get().increaseQty(product.id);
      else set(({ list }) => ({ list: [...list, { product, qty: 1 }] }));
    },
    removeFromCart: (productId: string) => {
      const index: number = findProductIndexById(productId);
      if (index === -1) return;
      set(({ list }) => {
        list.splice(index, 1);
        return { list: [...list] };
      });
    },
    increaseQty: (productId: string) => {
      const index: number = findProductIndexById(productId);
      if (index === -1) return;

      const list: CartItem[] = get().list;
      list[index].qty++;
      set({ list: [...list] });
    },
    decreaseQty: (productId: string) => {
      const index: number = findProductIndexById(productId);
      if (index === -1) return;

      const list: CartItem[] = get().list;
      if (list[index].qty === 1) get().removeFromCart(productId);
      else {
        list[index].qty--;
        set({ list: [...list] });
      }
    },
    clearCart: () => set({ list: [] }),
  };
});
