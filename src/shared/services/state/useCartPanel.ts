import { create } from "zustand";

export interface CartPanelState {
  open: boolean;
  toggle: () => void;
  openOverlay: () => void;
  closeOverlay: () => void;
}

export const useCartPanel = create<CartPanelState>((set) => ({
  open: false,
  toggle: () => set(({ open }) => ({ open: !open })),
  openOverlay: () => set({ open: true }),
  closeOverlay: () => set({ open: false }),
}));
