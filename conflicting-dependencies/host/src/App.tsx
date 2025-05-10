// import "package-a"; <- will crash as its not compatible with `package-b`'s lodash dependency
import "package-b";
// @ts-ignore
import sum from "package-c";
sum(1, 1);

function App() {
  return <h1>Conflicting dependency test</h1>;
}

export default App;
