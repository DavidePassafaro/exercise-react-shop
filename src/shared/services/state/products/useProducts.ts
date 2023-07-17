import { NewProduct, Product } from "@shared/models";
import { useReducer } from "react";
import * as ProductsApi from "../../api/products.api";
import { productsInitialState, productsReducer } from "./products.reducer";

export function useProductsService() {
  const [state, dispatch] = useReducer(productsReducer, productsInitialState);

  async function getProducts() {
    dispatch({ type: "pending", payload: true });
    try {
      const { items } = await ProductsApi.get();
      dispatch({ type: "productsGetSuccess", payload: items });
    } catch (error) {
      dispatch({ type: "error", payload: "Products not loaded" });
    }
  }

  async function deleteProduct(id: string) {
    dispatch({ type: "pending", payload: true });
    try {
      await ProductsApi.remove(id);
      dispatch({ type: "productDeleteSuccess", payload: id });
    } catch (error) {
      dispatch({ type: "error", payload: "Product not deleted" });
    }
  }

  async function addProduct(newProduct: NewProduct) {
    dispatch({ type: "pending", payload: true });
    try {
      const product: Product = await ProductsApi.add(newProduct);
      dispatch({ type: "productAddSuccess", payload: product });
    } catch (error) {
      dispatch({ type: "error", payload: "Products not added" });
    }
  }

  async function editProduct(editedProduct: Product) {
    dispatch({ type: "pending", payload: true });
    try {
      const product: Product = await ProductsApi.edit(editedProduct);
      dispatch({ type: "productEditSuccess", payload: product });
    } catch (error) {
      dispatch({ type: "error", payload: "Products not edited" });
    }
  }

  function setActiveItem(product: Partial<Product> | null) {
    dispatch({ type: "productSetActive", payload: product });
  }

  function resetActiveItem() {
    dispatch({ type: "productSetActive", payload: null });
  }

  return {
    state,
    actions: {
      getProducts,
      deleteProduct,
      addProduct,
      editProduct,
      setActiveItem,
      resetActiveItem,
    },
  };
}
