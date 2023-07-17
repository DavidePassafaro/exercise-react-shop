import { NavLink } from "react-router-dom";

export function ThanksPage() {
  return (
    <div>
      <div className="text-3xl text-center">Thank you for your order!</div>

      <div className="flex justify-center mt-12">
        <NavLink className="btn primary" to="/shop">
          Back to Shop
        </NavLink>
      </div>
    </div>
  );
}
