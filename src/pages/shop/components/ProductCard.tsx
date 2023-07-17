import { Product } from "@shared/models";

interface ComponentProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

export function ProductCard({
  product,
  onAddToCart = () => {},
}: ComponentProps) {
  const { id, name, cost, description, tmb }: Product = product;

  return (
    <li
      key={id}
      className="bg-white text-black rounded-xl shadow-2xl overflow-hidden"
    >
      {tmb && <img src={tmb} alt={name} className="h-64 w-full object-cover" />}

      <div className="flex justify-between items-center p-3 text-xl font-bold">
        <h1>{name}</h1>
        <label>€ {cost}</label>
      </div>

      {description && <p className="p-3">{description}</p>}

      <button
        className="bg-sky-600 text-white hover:bg-sky-800 transition w-full text-center p-3"
        onClick={() => onAddToCart(product)}
      >
        ADD TO CART
      </button>
    </li>
  );
}