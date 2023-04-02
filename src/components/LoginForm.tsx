import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
// import validators from "../utils/validators";

const LoginForm = () => {
  const emailInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);

  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = emailInput.current?.value;
    const password = passwordInput.current?.value;

    if (email === "") {
      setEmailErr("Please enter youe email");
    }
    if (password === "") {
      setPasswordErr("Please enter youe password");
    }
  };

  return (
    <>
      <section className="flex flex-col md:flex-row h-screen items-center">
        <div className="bg-white w-full my-4 md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
          <div className="w-full h-100">
            <div className="text-2xl font-extrabold text-center text-blue font-second text-primary">
              TS Playground
            </div>
            <h3 className="text-xl font-bold leading-tight mt-6 text-center font-5xl font-second text-accent">
              Log in
            </h3>

            <form className="mt-6" onSubmit={handleSubmit}>
              <div className="mt-4">
                <label className="block text-gray-700">Email</label>
                <input
                  ref={emailInput}
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                />
              </div>
              {emailErr !== "" ? (
                <p className="text-xs text-red-600">{emailErr}</p>
              ) : (
                ""
              )}
              <div className="mt-4">
                <label className="block text-gray-700">Password</label>
                <input
                  ref={passwordInput}
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                />
              </div>
              {passwordErr !== "" ? (
                <p className="text-xs text-red-600">{passwordErr}</p>
              ) : (
                ""
              )}

              <button
                type="submit"
                className="btn btn-primary normal-case font-bold w-full py-2 my-7 mr-auto"
              >
                Login
              </button>
            </form>
            <p className="mt-8">You don't have an account yet?</p>
            <Link to="/signup" className="text-primary">
              Signup
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginForm;
