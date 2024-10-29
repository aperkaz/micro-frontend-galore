import React from "react";
// console.log(window.something.fake); // will error out when imported from `federation_consumer` -> React.lazy + ErrorBoundary catches the error

export default function Button() {
  React.useEffect(() => {
    // throw new Error("sync errors will be caught by a ErrorBoundary");
    async function f() {
      // throw new Error("async errors will be caught by a ErrorBoundary, through 'error' event listener");
    }
    f();
  }, []);

  return (
    <button
      onClick={() => {
        throw new Error(
          "async errors will be caught by a ErrorBoundary, through 'error' event listener"
        );
      }}
    >
      Provider button, throw NEW error!
    </button>
  );
}
