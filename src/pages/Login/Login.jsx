/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
import { FaGoogle, FaGithub } from "react-icons/fa";

// import { useLocation, useHistory, useNavigate } from "react-router";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();
  console.log(location);

  const handleGoogleSignin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleGitHubSignin = () => {
    signInWithPopup(auth, gitProvider)
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const from = location.state?.from?.pathname || "/";
  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="card bg-slate-200 w-2/5 mx-auto my-36 pb-4">
        <h2 className="text-2xl font-semibold my-4">Please login</h2>
        <form onSubmit={handleLogin} className="mx-auto py-6">
          <div className="form-control">
            <label>
              <input
                name="email"
                type="email"
                placeholder="enter your email"
                className="input input-bordered w-72"
              />
            </label>
          </div>
          <div className="form-control py-4">
            <label>
              <input
                name="password"
                type="password"
                placeholder="enter your password"
                className="input input-bordered w-72"
              />
            </label>
          </div>
          <input className="btn w-72" type="Submit" value="Login" />
        </form>

        <div className="mt-5">
          <button
            onClick={handleGoogleSignin}
            className="btn bg-slate-50 text-black w-3/5 mx-auto mb-5 hover:bg-red-100"
          >
            <FaGoogle></FaGoogle>
            log in with google
          </button>
          <button onClick={handleGitHubSignin} className="btn w-3/5 mx-auto">
            <FaGithub />
            log in with Github
          </button>
        </div>
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
