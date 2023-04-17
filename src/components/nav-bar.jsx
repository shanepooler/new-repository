import { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import AuthContext from "../auth-context";

export default function NavBar() {
  const [user] = useContext(AuthContext);

  const { pathname } = useLocation();

  return (
    <nav className="border-b-2">
      <ul className="divide-y bg-slate-500 px-4 sm:flex sm:gap-x-16 sm:divide-y-0 [&>*]:py-4">
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        {pathname !== "/" && (
          <li>
            <Link to="/log-out">{user ? "Log out" : "Login/Register"}</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
