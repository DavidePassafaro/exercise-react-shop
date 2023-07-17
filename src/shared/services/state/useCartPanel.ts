import { create } from "zustand";

export interface CartStateOVerlay {
  open: boolean;
  toggle: () => void;
  openOverlay: () => void;
  closeOverlay: () => void;
}

export const useCartPanel = create<CartStateOVerlay>((set, get) => ({
  open: false,
  toggle: () => set({ open: !get().open }),
  openOverlay: () => set({ open: true }),
  closeOverlay: () => set({ open: false }),
}));
