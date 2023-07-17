import { CartItem } from "@shared/models";
import {
  selectCartIsEmpty,
  selectCartList,
  selectDecreaseQty,
  selectIncreaseQty,
  selectTotalCartCost,
  useCart,
} from "@shared/services";
import { NavLink } from "react-router-dom";

export function CartPage() {
  const list: CartItem[] = useCart(selectCartList);
  const totalCost: number = useCart(selectTotalCartCost);
  const isEmpty: boolean = useCart(selectCartIsEmpty);
  const increaseQty: (productId: string) => void = useCart(selectIncreaseQty);
  const decreaseQty: (productId: string) => void = useCart(selectDecreaseQty);

  return (
    <div>
      <h1 className="title">CART</h1>

      {isEmpty
        ? [
            <div className="text-3xl text-center">Cart is empty</div>,

            <div className="flex justify-center mt-12">
              <NavLink className="btn primary" to="/shop">
                Go to shop
              </NavLink>
            </div>,
          ]
        : [
            <ul>
              {list.map(
                ({ qty, product: { id, name, cost, img } }: CartItem) => (
                  <li
                    key={id}
                    className="flex flex-col sm:flex-row justify-between items-center gap-3 my-3 border-b border-blue-400 py-3"
                  >
                    <div className="flex flex-col sm:flex-row items-center gap-3">
                      {img && (
                        <img src={img} alt={name} className="w-24 rounded-xl" />
                      )}
                      <div className="font-bold">{name}</div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-4">
                      <div className="flex items-center gap-3">
                        <button
                          className="btn primary"
                          onClick={() => decreaseQty(id)}
                        >
                          -
                        </button>
                        <div>Quantity: {qty}</div>
                        <button
                          className="btn primary"
                          onClick={() => increaseQty(id)}
                        >
                          +
                        </button>
                      </div>

                      <div className="w-16 text-center sm:text-right">
                        € {qty * cost}
                      </div>
                    </div>
                  </li>
                )
              )}
            </ul>,

            <div className="text-4xl text-right mt-4 mr-4">
              Total: € {totalCost}
            </div>,

            <div className="flex justify-center">
              <NavLink className="btn primary lg" to="/checkout">
                Confirm order
              </NavLink>
            </div>,
          ]}
    </div>
  );
}
