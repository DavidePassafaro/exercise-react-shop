import PocketBase from "pocketbase";

const POCKET_BASE_URL: string = import.meta.env.VITE_POCKET_BASE_URL;

export const PB: PocketBase = new PocketBase(POCKET_BASE_URL);
