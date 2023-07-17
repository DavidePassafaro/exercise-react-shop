import { ServerError, Spinner } from "@shared/components";
import { Product } from "@shared/models";
import { useProductsService } from "@shared/services";
import { useEffect } from "react";
import { CMSProductsForm } from "./components/CMSProductForm";
import { CMSProductsList } from "./components/CMSProductsList";

export function CMSProductsPage() {
  const {
    state: { pending, error, products, activeItem },
    actions,
  } = useProductsService();

  useEffect(() => {
    actions.getProducts();
  }, []);

  function onSave(product: Product) {
    if (activeItem?.id) actions.editProduct(product);
    else actions.addProduct(product);
    actions.resetActiveItem();
  }

  return (
    <div>
      <h1 className="title">PRODUCTS</h1>

      <hr className="my-8" />

      {pending && <Spinner />}

      {error && <ServerError>{error}</ServerError>}

      <CMSProductsForm
        activeItem={activeItem}
        onSave={onSave}
        onClose={actions.resetActiveItem}
      />

      <CMSProductsList
        products={products}
        activeItem={activeItem}
        onSelectItem={actions.setActiveItem}
        onDeleteItem={actions.deleteProduct}
      />

      <div className="mt-8">
        <button
          className="btn primary"
          onClick={() => actions.setActiveItem({})}
        >
          ADD NEW
        </button>
      </div>
    </div>
  );
}
