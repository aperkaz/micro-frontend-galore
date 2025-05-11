import lodash from "lodash";

const sum = (a: number, b: number) => {
  // v4 specific lodash API
  console.log(
    `"package-prebuilt-lodash4" - expects lodash 4.17.21 -> ${
      lodash.VERSION
    } / ${lodash.toLower("SHOULD BE LOWERCASE")}`
  );

  //@ts-ignore
  window.versionWinner = "package-prebuilt-lodash4";
  return a + b;
};

export default sum;
