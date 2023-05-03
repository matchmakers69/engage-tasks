import { useRoutes } from "react-router-dom";
import { appRoutes } from "./AppRoutes";

const Routes = () => {
  const element = useRoutes(appRoutes);

  return <>{element}</>;
};

export default Routes;
