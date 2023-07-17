import { CartPanelState } from "..";

export const selectOpen = ({ open }: CartPanelState) => open;

export const selectToggle = ({ toggle }: CartPanelState) => toggle;

export const selectCloseOverlay = ({ closeOverlay }: CartPanelState) =>
  closeOverlay;
