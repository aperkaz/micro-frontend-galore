import React, { lazy, Suspense } from "react";
import "./App.css";
const ProviderButton = lazy(() => import("federation_provider/button")); // by loading with `React.lazy`,

interface State {
  error: any; // Could be an exception thrown in synchronous code or could be a rejection reason from a Promise, we don't care
}

class ErrorBoundary extends React.Component<{
  fallback: React.ReactNode;
  children: React.ReactNode;
}> {
  public state: State = {
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { error: error };
  }

  public componentDidCatch(error: Error, errorInfo: any) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.error) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

const App = () => {
  return (
    <div className="content">
      <h1>Federation Consumer</h1>
      <div>
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
          <Suspense fallback={<div>loading</div>}>
            <ProviderButton />
          </Suspense>
        </ErrorBoundary>

        <br />
        <button
          onClick={() => {
            throw new Error(
              "local error, the ErrorBoundary should not catch it!"
            );
          }}
        >
          Local button, throw NEW error!
        </button>
      </div>
    </div>
  );
};

export default App;
