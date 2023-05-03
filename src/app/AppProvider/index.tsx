import App from "app/App";
import { BrowserRouter as Router } from "react-router-dom";
const AppProvider = () => {
  return (
    <>
      <Router>
        <App />
      </Router>
    </>
  );
};

export default AppProvider;
