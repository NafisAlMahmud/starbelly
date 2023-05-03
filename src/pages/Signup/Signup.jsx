import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { Result } from "postcss";

const Signup = () => {
  const [error, setError] = useState("");
  const { createUser } = useContext(AuthContext);
  const handleSignup = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    console.log(name, email, password, confirm);

    setError("");

    if (password !== confirm) {
      setError("Your password did not match");
      return;
    } else if (password.length < 6) {
      setError("Your password must be at least 6 characters");
      return;
    }

    createUser(email, password).then((result) => {
      const loggedUser = result.user;
      console.log(error.message);
    });

    console.log(name, email, password, confirm);
  };
  return (
    <div>
      <div>
        <div className="card bg-slate-200 w-2/5 mx-auto my-36 pb-4">
          <h2 className="text-2xl font-semibold my-4">Please Sign up</h2>
          <form onSubmit={handleSignup} className="mx-auto py-6">
            <div className="form-control pb-4">
              <input
                name="name"
                type="name"
                placeholder="enter your name"
                className="input input-bordered w-72"
                required
              />
            </div>
            <div className="form-control">
              <input
                name="email"
                type="email"
                placeholder="enter your email"
                className="input input-bordered w-72"
                required
              />
            </div>
            <div className="form-control py-4">
              <input
                name="password"
                type="password"
                placeholder="enter your password"
                className="input input-bordered w-72"
                required
              />
            </div>
            <div className="form-control pb-4">
              <input
                name="confirm"
                type="password"
                placeholder="confirm your password"
                className="input input-bordered w-72"
                required
              />
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
          <p className="text-error">{error}</p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
