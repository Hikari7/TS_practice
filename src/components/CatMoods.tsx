import React from "react";
import { Cat } from "react-kawaii";

const SadCat = () => {
  return (
    <>
      <Cat mood="sad" />
      <h2>No result</h2>
    </>
  );
};

const LovestriuckCat = () => {
  return (
    <>
      <Cat mood="lovestruck" />
    </>
  );
};

export { SadCat, LovestriuckCat };
