import { CartItem } from "@shared/models";
import { CartState } from "./useCart";

export const selectCartList = ({ list }: CartState) => list;

export const selectIncreaseQty = ({ increaseQty }: CartState) => increaseQty;

export const selectDecreaseQty = ({ decreaseQty }: CartState) => decreaseQty;

export const selectClearCart = ({ clearCart }: CartState) => clearCart;

export const selectCartIsEmpty = (state: CartState) => state.list.length === 0;

export const selectCartProductsQuantity = ({ list }: CartState) =>
  list.reduce((acc, { qty }) => acc + qty, 0);

export const selectTotalCartCost = ({ list }: CartState) =>
  list.reduce(
    (acc, { qty, product: { cost } }: CartItem) => acc + qty * cost,
    0
  );

export const selectAddToCart = ({ addToCart }: CartState) => addToCart;
