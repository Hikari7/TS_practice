import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  validateEmail,
  validateUsername,
  validatePassword,
  validateConfirmPassword,
} from "../../src/utils/validators";

const SignupForm = () => {
  const userInput = useRef<HTMLInputElement>(null);
  const emailInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);
  const confirmPasswordInput = useRef<HTMLInputElement>(null);

  const [usernameErr, setUsernameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [confirmPasswordErr, setConfirmPasswordErr] = useState("");

  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = userInput.current?.value;
    const email = emailInput.current?.value;
    const password = passwordInput.current?.value;
    const confirmPassword = confirmPasswordInput.current?.value;

    const userNameHintValidate = validateUsername(username);
    setUsernameErr(userNameHintValidate ? userNameHintValidate : "");
    const userEmailHintValidate = validateEmail(email);
    setEmailErr(userEmailHintValidate ? userEmailHintValidate : "");
    const userPasswordHintValidate = validatePassword(password);
    setPasswordErr(userPasswordHintValidate ? userPasswordHintValidate : "");
    const confirmPasswordHintValidate = validateConfirmPassword(
      confirmPassword,
      password
    );
    setConfirmPasswordErr(
      confirmPasswordHintValidate ? confirmPasswordHintValidate : ""
    );
  };

  return (
    <section className="flex flex-col md:flex-row h-screen items-center">
      <div className="bg-white w-full my-4 md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
        <div className="w-full h-100">
          <div className="text-2xl font-extrabold text-center text-blue font-second text-primary">
            Meeting Scheduling App
          </div>
          <h3 className="text-xl font-bold leading-tight mt-6 text-center font-second text-accent">
            Sign up
          </h3>

          <form className="mt-6" onSubmit={handleSubmit}>
            <label className="block text-gray-700">Username</label>
            <input
              ref={userInput}
              type="username"
              name="password"
              placeholder="Enter Username"
              className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
            />

            {usernameErr !== "" ? (
              <p className="text-xs text-red-600">{usernameErr}</p>
            ) : (
              ""
            )}

            <label className="block text-gray-700 mt-2">Email</label>
            <input
              ref={emailInput}
              type="username"
              name="email"
              placeholder="Enter Email"
              className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
            />

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
            <div className="mt-4">
              <label className="block text-gray-700">Confirm Password</label>
              <input
                ref={confirmPasswordInput}
                type="password"
                name="confirm password"
                placeholder="Enter Confirm password"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              />
            </div>
            {confirmPasswordErr !== "" ? (
              <p className="text-xs text-red-600">{confirmPasswordErr}</p>
            ) : (
              ""
            )}

            <button
              type="submit"
              className="btn btn-primary normal-case font-bold w-full py-2 my-7"
            >
              Signup
            </button>
          </form>

          <p className="mt-8"> Already have an account?</p>
          <Link
            to="/login"
            // href="#"
            className="text-blue-500 hover:opacity-70 border-b border-blue"
          >
            Login
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignupForm;
