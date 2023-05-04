import Button from "components/shared/Button";
import { FallbackProps } from "react-error-boundary";

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div role="alert">
      <h2>Something went wrong!</h2>
      <h3>{error.message}</h3>

      <Button type="button" onClick={resetErrorBoundary}>
        Try again
      </Button>
    </div>
  );
};

export default ErrorFallback;
