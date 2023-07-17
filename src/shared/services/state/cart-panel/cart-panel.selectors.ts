import { CartPanelState } from "./useCartPanel";

export const selectOpen = ({ open }: CartPanelState) => open;

export const selectToggle = ({ toggle }: CartPanelState) => toggle;

export const selectOpenOverlay = ({ openOverlay }: CartPanelState) =>
  openOverlay;

export const selectCloseOverlay = ({ closeOverlay }: CartPanelState) =>
  closeOverlay;
