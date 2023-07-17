import { IfLogged } from "@shared/components";
import { Navigate, useRoutes } from "react-router-dom";
import {
  CMSOrdersPage,
  CMSPage,
  CMSProductsPage,
  CartPage,
  CheckoutPage,
  LoginPage,
  ShopPage,
  ThanksPage,
} from "./pages";

function AppRoutes() {
  return useRoutes([
    { path: "login", element: <LoginPage /> },
    { path: "shop", element: <ShopPage /> },
    { path: "cart", element: <CartPage /> },
    { path: "checkout", element: <CheckoutPage /> },
    { path: "thankyou", element: <ThanksPage /> },
    {
      path: "cms",
      element: (
        <IfLogged elseNode={<Navigate to="/login" />}>
          <CMSPage />
        </IfLogged>
      ),
      children: [
        { path: "orders", element: <CMSOrdersPage /> },
        { path: "products", element: <CMSProductsPage /> },
        { index: true, element: <Navigate to="products" /> },
      ],
    },
    { index: true, element: <Navigate to="login" /> },
    { path: "*", element: <div>404 - This page does not exist</div> },
  ]);
}

// function AppRoutes() {
//     return (
//       <Routes>
//         <Route path="login" element={<LoginPage />} />

//         <Route path="shop" element={<ShopPage />} />
//         <Route path="cart" element={<CartPage />} />
//         <Route path="checkout" element={<CheckoutPage />} />
//         <Route path="thankyou" element={<ThanksPage />} />

//         <Route path="cms" element={<CMSPage />}>
//           <Route path="orders" element={<CMSOrdersPage />} />
//           <Route path="products" element={<CMSProductsPage />} />

//           <Route index element={<Navigate to="products" />} />
//         </Route>

//         <Route index element={<Navigate to="login" />} />
//         <Route path="*" element={<div>404 - This page does not exist</div>} />
//       </Routes>
//     );
//   }

export default AppRoutes;
