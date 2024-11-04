import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { MdHome, MdFavorite } from "react-icons/md";

const Header = () => {
  return (
    <div className="bg-emerald-900 p-4 flex justify-between items-center">
      <NavLink to="/">
        <img className="w-24" src={logo} />
      </NavLink>

      <div className="flex items-center gap-8 mr-4 text-2xl">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${
              isActive
                ? "text-white underline underline-offset-4"
                : "text-emerald-700"
            }`
          }
        >
          <MdHome />
        </NavLink>
        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            `${
              isActive
                ? "text-white underline underline-offset-4"
                : "text-emerald-700"
            }`
          }
        >
          <MdFavorite />
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
