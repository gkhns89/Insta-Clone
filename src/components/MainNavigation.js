import { NavLink } from "react-router-dom";

export default function MainNavigation() {
  return (
    <nav className="text-lg   text-stone-100 py-2 font-bold flex gap-2 justify-center">
      <NavLink to="/" exact activeClassName="text-lime-600">
        Anasayfa
      </NavLink>
      <NavLink to="/profile" activeClassName="text-lime-600">
        Profil
      </NavLink>
      <NavLink to="/login" activeClassName="text-lime-600">
        Giriş
      </NavLink>
    </nav>
  );
}
