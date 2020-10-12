import React from "react";
import TopLayout from "./src/layouts/TopLayout/index.tsx";
export const wrapRootElement = ({ element }) => {
  return <TopLayout>{element}</TopLayout>;
};
