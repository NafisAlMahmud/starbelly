/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";

// import { useLocation, useHistory, useNavigate } from "react-router";

const Login = () => {
  return (
    <div>
      <div className="card bg-slate-200 w-2/5 mx-auto my-36 pb-4">
        <h2 className="text-2xl font-semibold my-4">Please login</h2>
        <form className="mx-auto py-6">
          <div className="form-control">
            <label>
              <input
                type="email"
                placeholder="enter your email"
                className="input input-bordered w-72"
              />
            </label>
          </div>
          <div className="form-control py-4">
            <label>
              <input
                type="password"
                placeholder="enter your password"
                className="input input-bordered w-72"
              />
            </label>
          </div>
          <input className="btn w-72" type="Submit" value="Login" />
        </form>
        <p className="pt-2">
          <small>
            Create an account
            <Link className="text-blue-900 font-bold text-md pl-2" to="/signup">
              Sign up
            </Link>
          </small>
        </p>
      </div>
    </div>
  );
};

export default Login;
