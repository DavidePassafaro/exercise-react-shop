import { ServerError, Spinner } from "@shared/components";
import { Product } from "@shared/models";
import { PB } from "@shared/services";
import { useEffect, useState } from "react";
import { ProductCard } from "./components/ProductCard";

export function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [pending, setPending] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  function loadData() {
    setError(false);
    setPending(true);

    PB.collection("products")
      .getList<Product>()
      .then(({ items }) => setProducts(items))
      .catch(() => setError(true))
      .finally(() => setPending(false));
  }

  function addToCart(product: Product) {
    console.log(product);
  }

  useEffect(loadData, []);

  return (
    <div>
      <h1 className="title">SHOP</h1>

      {pending && <Spinner />}

      {error && <ServerError />}

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-16">
        {products.map((product: Product) => (
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
