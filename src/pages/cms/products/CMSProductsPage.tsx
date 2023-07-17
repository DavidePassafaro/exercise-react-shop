import { useProductsService } from "@shared/services";

export function CMSProductsPage() {
  const { state, actions } = useProductsService();

  function getProductsHandler() {
    actions.getProducts();
  }

  return (
    <div>
      <h1 className="title">PRODUCTS</h1>

      <hr className="my-8" />

      {state.pending && <div>loading</div>}

      {state.error && <div>{state.error}</div>}

      <button className="btn primary" onClick={getProductsHandler}>
        Get Products
      </button>

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}
