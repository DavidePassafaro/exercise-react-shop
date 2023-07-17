import { ServerError, Spinner } from "@shared/components";
import { Product } from "@shared/models";
import {
  selectAddToCart,
  selectOpenOverlay,
  useCart,
  useCartPanel,
  useProductsService,
} from "@shared/services";
import { useEffect } from "react";
import { ProductCard } from "./components/ProductCard";

export function ShopPage() {
  const openCartPanel: () => void = useCartPanel(selectOpenOverlay);
  const addProductToCart: (product: Product) => void = useCart(selectAddToCart);

  const { state, actions } = useProductsService();

  useEffect(() => {
    actions.getProducts();
  }, []);

  function addToCart(product: Product) {
    addProductToCart(product);
    openCartPanel();
  }

  return (
    <div>
      <h1 className="title">SHOP</h1>

      {state.pending && <Spinner />}

      {state.error && <ServerError />}

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-16">
        {state.products.map((product: Product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </ul>
    </div>
  );
}
