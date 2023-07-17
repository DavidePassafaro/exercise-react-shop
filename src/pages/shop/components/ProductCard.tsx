import { Product } from "@shared/models";

interface ComponentProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

export function ProductCard({
  product,
  onAddToCart = () => {},
}: ComponentProps) {
  const { id, name, cost, description, img }: Product = product;

  return (
    <li
      key={id}
      className="flex flex-col bg-white text-black rounded-xl shadow-2xl overflow-hidden"
    >
      {img && (
        <img src={img} alt={name} className="h-64 w-full object-contain" />
      )}

      <div className="flex justify-between items-center p-3 text-xl font-bold">
        <h1>{name}</h1>
        <label>€ {cost}</label>
      </div>

      {description && <p className="flex-1 p-3">{description}</p>}

      <button
        className="bg-sky-600 text-white hover:bg-sky-800 transition w-full text-center p-3"
        onClick={() => onAddToCart(product)}
      >
        ADD TO CART
      </button>
    </li>
  );
}
