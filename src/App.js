import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes.js";
import ScrollToTop from "./components/scrollTop";
const App = () => {
  const routing = useRoutes(routes);
  return (
    <React.Fragment>
      <ScrollToTop />
      {routing}
    </React.Fragment>
  );
};

export default App;

