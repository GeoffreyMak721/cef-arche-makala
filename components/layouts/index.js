import React from "react";
import Headers from "../layouts/Headers";
import Footers from "../layouts/Footers";
import Searchs from "../layouts/Searchs";

export default function index({ children }) {
  return (
    <>
      {children}
      <Footers />
      <Searchs />
    </>
  );
}
