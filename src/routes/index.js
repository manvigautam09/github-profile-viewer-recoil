import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ProfileDashboard from "./ProfileDashboard";

const Routes = () => {
  return (
    <Router>
      <Route path="/" component={ProfileDashboard} />
    </Router>
  );
};

export default Routes;
