import lodash from "lodash";

const sum = (a: number, b: number) => {
  // v4 specific lodash API
  console.log(
    `packageC - expects lodash 4.17.21 -> ${lodash.VERSION} / ${lodash.toLower(
      "SHOULD BE LOWERCASE"
    )}`
  );

  //@ts-ignore
  window.versionWinner = "packageC";
  return a + b;
};

export default sum;
