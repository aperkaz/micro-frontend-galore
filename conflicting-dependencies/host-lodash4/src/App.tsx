// import "package-lodash4"; <- will crash as its not compatible with `package-lodash3`'s lodash dependency
import "package-lodash3";
// @ts-ignore
import sum from "package-prebuilt-lodash4";
sum(1, 1);

function App() {
  return <h1>Conflicting dependency test</h1>;
}

export default App;
