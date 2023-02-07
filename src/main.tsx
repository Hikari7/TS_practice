import React from "react";
import ReactDOM from "react-dom/client";
import FetchingApi from "./components/FetchingApi";
import Kawaii from "./components/Kawaii";
import KawaiiProvider from "./components/KawaiiProvider";
import Search from "./components/Search";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <FetchingApi /> */}
    {/* <KawaiiProvider>
      <Kawaii />
    </KawaiiProvider> */}
    <Search />
  </React.StrictMode>
);
