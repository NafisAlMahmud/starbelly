import React from "react";
import { Link } from "react-router-dom";
import Blogs from "../Blogs/Blogs";

const Header = () => {
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
          <li>
            <Link to="blogs">Blogs</Link>
          </li>
          <li>
            <Link>
              <button className="px-4 py-2 bg-slate-500 text-white rounded">
                Login
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
