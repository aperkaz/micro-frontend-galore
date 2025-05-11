import lodash from "lodash";
(() => {
  var users = [
    { name: "Alice", age: 25, active: true },
    { name: "Bob", age: 30, active: false },
    { name: "Charlie", age: 25, active: true },
  ];
  console.log(`"package-lodash3" - expects lodash 3.0.1 ->: ${lodash.VERSION}`);
  // v3 specific API
  lodash.where(users, {
    age: 25,
    active: true,
  });

  window.versionWinner = "package-lodash3";
})();
