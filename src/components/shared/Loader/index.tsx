import classes from "./Loader.module.css";

type ILoaderProps = {
  ["data-testid"]?: string;
};

const Loader = ({ "data-testid": dataTestid }: ILoaderProps) => {
  return (
    <div data-testid={dataTestid} className={classes["loader-content"]}>
      <p className={classes["spinner-text"]}>Data loading...</p>
    </div>
  );
};

export default Loader;
