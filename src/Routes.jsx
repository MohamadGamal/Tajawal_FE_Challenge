import React, { Fragment } from "react";
import {
  Route,
  Switch,
  // Link
} from "react-router-dom";

import FourOhFour from "./Components/FourOhFour/404";
import Search from "./Components/Search/SearchContainer";
import Dashboard from "./Components/Dashboard/DashboardContainer";

const Routes = () => (
  <Fragment>
    <Switch>
      {/* <Route exact path="/" component={Home} />
      
      <Route path="/main/:status?" component={Main} />
      <Route path="/edit" component={Edit} />
      <Route exact path="/delete" component={Delete} />
      <Route path="/delete/done" component={DoneDelete} /> */}

      <Route exact path="/" component={Search} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/404" component={FourOhFour} />
    </Switch>
  </Fragment>
);
export default Routes;
