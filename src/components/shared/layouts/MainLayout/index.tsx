import Header from "components/shared/Header";
import { useOutlet } from "react-router-dom";
import classes from "./MainLayout.module.css";

const MainLayout = () => {
  const outlet = useOutlet();
  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.content}>
        <div className={classes["content-inner"]}>{outlet}</div>
      </div>
    </div>
  );
};

export default MainLayout;
