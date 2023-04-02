import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import FetchingApi from "./components/FetchingApi";
import Kawaii from "./components/Kawaii";
import KawaiiProvider from "./components/KawaiiProvider";
import Search from "./components/Search";
import AnimalApi from "./components/AnimalApi";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>

        {/* <SignupForm /> */}
        {/* <FetchingApi /> */}
        {/* <KawaiiProvider>
      <Kawaii />
    </KawaiiProvider> */}
        {/* <Search /> */}
        {/* <AnimalApi /> */}
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
