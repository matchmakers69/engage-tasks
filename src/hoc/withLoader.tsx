import { ComponentType, Suspense } from "react";

const withLoader = <T extends Record<string, unknown>>(Component: ComponentType<T>) => {
  return (hocProps: T) => {
    return (
      <Suspense fallback={<div>Loading page...</div>}>
        <Component {...hocProps} />
      </Suspense>
    );
  };
};

export default withLoader;
