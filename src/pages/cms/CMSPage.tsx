import { NavLink, Outlet } from "react-router-dom";
import { NavLinkClassName } from "../../shared/models";

interface CMSNavBarLink {
  description: string;
  to: string;
}

const CMS_NAVBAR_LINKS: CMSNavBarLink[] = [
  { description: "Products", to: "/cms/products" },
  { description: "Orders", to: "/cms/orders" },
];

const isActive = ({ isActive }: NavLinkClassName) =>
  "btn" + (isActive ? " primary" : "");

export function CMSPage() {
  return (
    <div>
      {CMS_NAVBAR_LINKS.map(
        ({ description, to }: CMSNavBarLink, index: number) => (
          <NavLink key={index} className={isActive} to={to}>
            {description}
          </NavLink>
        )
      )}

      <Outlet />
    </div>
  );
}
