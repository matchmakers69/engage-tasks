import { QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "app/App";
import { BrowserRouter as Router } from "react-router-dom";
import { queryClient } from "config/reactQuery";
import { errorHandler } from "utils/erros/errorHandler";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "components/ErrorFallback";
const AppProvider = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {process.env.NODE_ENV !== "production" && (
          <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        )}
        <ToastContainer />
        <ErrorBoundary FallbackComponent={ErrorFallback} onError={errorHandler}>
          <Router>
            <App />
          </Router>
        </ErrorBoundary>
      </QueryClientProvider>
    </>
  );
};

export default AppProvider;
