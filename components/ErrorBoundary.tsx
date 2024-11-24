import { Component, ErrorInfo, ReactNode } from "react";

    interface ErrorBoundaryProps {
      children: ReactNode;
    }

    interface ErrorBoundaryState {
      hasError: boolean;
      error: Error | null;
    }

    class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
      constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false, error: null };
      }

      static getDerivedStateFromError(error: Error) {
        return { hasError: true, error };
      }

      componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Caught an error:", error, errorInfo);
        // Log the error to an error tracking service
      }

      render() {
        if (this.state.hasError) {
          return (
            <div>
              <h1>Something went wrong.</h1>
              <p>{this.state.error?.message}</p>
            </div>
          );
        }

        return this.props.children;
      }
    }

    export default ErrorBoundary;
