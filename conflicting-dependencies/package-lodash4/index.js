import lodash from "lodash";
(() => {
  console.log(
    `"package-lodash4" - expects lodash 4.17.21 -> ${lodash.VERSION}`
  );
  // v4 specific lodash API
  lodash.toLower("SHOULD BE LOWERCASE");

  window.versionWinner = "package-lodash4";
})();
