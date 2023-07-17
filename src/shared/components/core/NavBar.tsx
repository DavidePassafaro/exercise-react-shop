import logo from "@assets/react.svg";
import { NavLinkClassName } from "@shared/models";
import {
  selectCartIsEmpty,
  selectCartProductsQuantity,
  selectLogout,
  selectOpen,
  selectToggle,
  useAuth,
  useCart,
  useCartPanel,
} from "@shared/services";
import { NavLink, NavigateFunction, useNavigate } from "react-router-dom";
import { IfLogged } from "../auth/IfLogged";
import { CartPanel } from "./CartPanel";

export function NavBar() {
  const navigate: NavigateFunction = useNavigate();
  const isCartOpen: boolean = useCartPanel(selectOpen);
  const toggleCartPanel: () => void = useCartPanel(selectToggle);
  const cartProductsQuantity: number = useCart(selectCartProductsQuantity);
  const isEmpty: boolean = useCart(selectCartIsEmpty);
  const logout: () => void = useAuth(selectLogout);

  function isMainButtonActive({ isActive }: NavLinkClassName) {
    return "text-xl" + (isActive ? " text-sky-400 font-bold" : "");
  }

  function isBottomButtonActive({ isActive }: NavLinkClassName) {
    return "btn accent lg" + (isActive ? " border-4 border-yellow-300" : "");
  }

  function logoutHandler() {
    logout();
    navigate("/login");
  }

  return (
    <div className="fixed top-0 left-0 right-0 shadow-2xl z-10">
      <div className="bg-slate-900 flex justify-between items-center h-20 text-white p-3">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Shop logo" className="w-16" />

          <NavLink to="shop" className={isMainButtonActive}>
            SHOP
          </NavLink>
        </div>

        {/* Cart */}
        <div>
          <button
            className="btn accent lg"
            disabled={isEmpty}
            onClick={toggleCartPanel}
          >
            Cart: {cartProductsQuantity}
          </button>
        </div>

        {isCartOpen && <CartPanel />}

        {/* Bottom Bar */}
        <div className="flex fixed bottom-2 right-2 p-5">
          <NavLink className={isBottomButtonActive} to="cms">
            CMS
          </NavLink>

          <IfLogged
            elseNode={
              <NavLink className={isBottomButtonActive} to="login">
                Login
              </NavLink>
            }
          >
            <button className="btn primary lg" onClick={logoutHandler}>
              Logout
            </button>
          </IfLogged>
        </div>
      </div>
    </div>
  );
}
