import { CartItem } from "@shared/models";
import {
  selectCartList,
  selectCloseOverlay,
  selectTotalCartCost,
  useCart,
  useCartPanel,
} from "@shared/services";
import { NavigateFunction, useNavigate } from "react-router-dom";

export function CartPanel() {
  const navigate: NavigateFunction = useNavigate();
  const cartItemList: CartItem[] = useCart(selectCartList);
  const cartTotalCost: number = useCart(selectTotalCartCost);
  const closeCartPanel: () => void = useCartPanel(selectCloseOverlay);

  function goToCart() {
    navigate("cart");
    closeCartPanel();
  }

  return (
    <div className="fixed right-4 top-24 bg-slate-800 p-3 rounded-xl shadow-2xl w-96">
      {cartItemList && (
        <ul className="flex flex-col gap-4">
          {cartItemList.map(
            ({ qty, product: { id, name, cost } }: CartItem) => (
              <li
                key={id}
                className="flex justify-between items-center border-b border-slate-600 pb-3"
              >
                <div>{name}</div>

                <div className="flex gap-3">
                  <div>
                    ({qty} x € {cost})
                  </div>

                  <div>€ {qty * cost}</div>
                </div>
              </li>
            )
          )}
        </ul>
      )}

      <div className="flex justify-end text-xl font-bold my-3">
        Total: € {cartTotalCost}
      </div>

      <div className="flex justify-center">
        <button className="btn primary" onClick={goToCart}>
          Go to Cart
        </button>
      </div>
    </div>
  );
}
