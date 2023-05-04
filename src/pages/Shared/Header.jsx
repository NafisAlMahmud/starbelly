import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Blogs from "../Blogs/Blogs";
import { AuthContext } from "../../provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleLogout = () => {
    logOut()
      .then((result) => {})
      .catch((error) => console.error(error));
  };
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          {" "}
          <a className="btn btn-ghost normal-case text-4xl font-extrabold hover:text-white ">
            Star<span className="text-slate-500">belly</span>
          </a>
        </NavLink>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li className="text-xl font-semibold ">
            <NavLink
              to="blogs"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Blogs
            </NavLink>
          </li>
          <li>
            {user ? (
              <img
                className="rounded-full w-20"
                title={user?.displayName}
                src={`${user?.photoURL}`}
                alt=""
              />
            ) : (
              <NavLink
                to="login"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                <button className="btn bg-slate-500 text-white rounded">
                  Login
                </button>
              </NavLink>
            )}
          </li>
          <li>
            {user && (
              <span>
                {user.displayName}
                <button className="btn" onClick={handleLogout}>
                  Sign out
                </button>
              </span>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
