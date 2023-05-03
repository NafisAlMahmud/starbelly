import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <div>
        <div className="card bg-slate-200 w-2/5 mx-auto my-36 pb-4">
          <h2 className="text-2xl font-semibold my-4">Please Sign up</h2>
          <form className="mx-auto py-6">
            <div className="form-control pb-4">
              <label>
                <input
                  type="name"
                  placeholder="enter your name"
                  className="input input-bordered w-72"
                />
              </label>
            </div>
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
            <input className="btn w-72" type="Submit" value="Sign up" />
            <p className="pt-2">
              <small>
                Already have an account?{" "}
                <Link className="text-blue-900 font-bold text-md" to="/login">
                  Login
                </Link>
              </small>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
