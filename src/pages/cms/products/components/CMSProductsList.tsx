import { Product } from "@shared/models";
import clsx from "clsx";
import { MouseEvent } from "react";

interface CMSProductsListProps {
  products: Product[];
  activeItem: Partial<Product> | null;
  onSelectItem: (product: Product) => void;
  onDeleteItem: (id: string) => void;
}

export function CMSProductsList({
  products,
  activeItem,
  onSelectItem,
  onDeleteItem,
}: CMSProductsListProps) {
  function deleteProduct(event: MouseEvent, id: string) {
    event.stopPropagation();
    onDeleteItem(id);
  }

  return (
    <div className="mt-12">
      <table className="table-auto w-full hover">
        <thead>
          <tr>
            <th className="text-left">PRODUCTS</th>
            <th className="text-left">IMAGE</th>
            <th>COST</th>
            <th>DELETE</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product: Product) => (
            <tr
              key={product.id}
              className={clsx("cursor-pointer", {
                "bg-sky-200 text-black pointer-events-none":
                  product.id === activeItem?.id,
              })}
              onClick={() => onSelectItem(product)}
            >
              <td>{product.name}</td>

              <td>
                {product.img && (
                  <img
                    className="h-16 rounded-xl"
                    src={product.img}
                    alt={product.name}
                  />
                )}
              </td>

              <td className="text-center">€ {product.cost}</td>

              <td className="text-center">
                <i
                  className="fa fa-trash"
                  onClick={(event) => deleteProduct(event, product.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
