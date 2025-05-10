import React from "react";

const sum = (a: number, b: number) => {
  console.log(`packageC - expects react 19.1.0 -> ${React.version}`);
  return a + b;
};

export default sum;
