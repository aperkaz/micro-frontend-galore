import React, { lazy } from "react";
import "./App.css";
const ProviderButton = lazy(() => import("federation_provider/button"));

interface State {
  error: any; // Could be an exception thrown in synchronous code or could be a rejection reason from a Promise, we don't care
}

class ErrorBoundary extends React.Component<{
  fallback: React.ReactNode;
  children: React.ReactNode;
}> {
  private errorHandler = (event: Event) => {
    console.log("error caught");
    this.setState({
      error: event,
    });
  };

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

  componentDidMount() {
    // Add an event listener to the window to catch unhandled promise rejections & stash the error in the state
    window.addEventListener("error", this.errorHandler);
  }

  componentWillUnmount() {
    window.removeEventListener("error", this.errorHandler);
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
          <ProviderButton />
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
