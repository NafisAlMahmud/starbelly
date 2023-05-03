import React, { useContext } from "react";
import { Link } from "react-router-dom";
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
        <Link to="/">
          {" "}
          <a className="btn btn-ghost normal-case text-4xl font-extrabold">
            Star<span className="text-slate-500">belly</span>
          </a>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li className="text-xl font-semibold">
            <Link to="blogs">Blogs</Link>
          </li>
          <li>
            <Link to="login">
              <button className="px-4 py-2 bg-slate-500 text-white rounded">
                Login
              </button>
            </Link>
            <Link to="signup">
              <button className="px-4 py-2 bg-slate-900 text-white rounded">
                Sign Up
              </button>
            </Link>
            {user && (
              <span>
                Welcome {user.email}{" "}
                <button className="btn" onClick={handleLogout}>
                  Sign out
                </button>{" "}
              </span>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
