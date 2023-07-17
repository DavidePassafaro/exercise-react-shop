import { ProductsOrder } from "@shared/models";
import { useCartPanel } from "@shared/services";
import { useEffect, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

interface ComponentProps {
  productsOrderList?: ProductsOrder[];
}

export function CartPanel({ productsOrderList }: ComponentProps) {
  const [totalPrice, setTotalPrice] = useState<number>();
  const navigate: NavigateFunction = useNavigate();
  const closeCartPanel: () => void = useCartPanel(
    (state) => state.closeOverlay
  );

  useEffect(
    () =>
      setTotalPrice(
        productsOrderList?.reduce(
          (acc, { quantity, product: { cost } }: ProductsOrder) =>
            acc + quantity * cost,
          0
        )
      ),
    [productsOrderList]
  );

  function goToCart() {
    navigate("cart");
    closeCartPanel();
  }

  return (
    <div className="fixed right-4 top-24 bg-slate-800 p-3 rounded-xl shadow-2xl w-96">
      {productsOrderList && (
        <ul className="flex flex-col gap-4">
          {productsOrderList.map(
            ({ quantity, product: { id, name, cost } }: ProductsOrder) => (
              <li
                key={id}
                className="flex justify-between items-center border-b border-slate-600 pb-3"
              >
                <div>{name}</div>

                <div className="flex gap-3">
                  <div>
                    ({quantity} x € {cost})
                  </div>

                  <div>€ {quantity * cost} </div>
                </div>
              </li>
            )
          )}
        </ul>
      )}

      <div className="flex justify-end text-xl font-bold my-3">
        Total: {totalPrice}
      </div>

      <div className="flex justify-center">
        <button className="btn primary" onClick={goToCart}>
          Go to Cart
        </button>
      </div>
    </div>
  );
}
