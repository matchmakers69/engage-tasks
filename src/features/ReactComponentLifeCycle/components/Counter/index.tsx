import Button from "components/shared/Button";
import { useState } from "react";
import classes from "./Counter.module.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleCounterState = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div className={classes["counter-wrapper"]}>
      <Button onClick={handleCounterState} type="button">
        Click me!
      </Button>
      <div className={classes["count-wrapper"]}>
        <div data-testid="current-count-value" className={classes["count-field"]}>
          Button was clicked {count} time{count === 1 ? "" : "s"}
        </div>
      </div>
    </div>
  );
};

export default Counter;
