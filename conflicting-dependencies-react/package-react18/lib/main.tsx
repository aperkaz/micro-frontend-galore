import React from "react";

/* 
 React 18 specific code, Module pattern factories (https://react.dev/blog/2024/04/25/react-19-upgrade-guide#breaking-changes)
 It should break on react19.
 **/
function FactoryComponent() {
  return {
    render() {
      return (
        <div>
          "package-react18" depends on react 18.3.1 -- available:{" "}
          {React.version}
        </div>
      );
    },
  };
}

function App() {
  return FactoryComponent();
}
App.prototype = React.Component.prototype;

export default App;
