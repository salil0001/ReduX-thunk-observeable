
import Navbar from "./Navbar/Navbar";
import { BrowserRouter,  Switch , Route } from "react-router-dom";
import User from "./User/User";
import Comments from './Comments/Comments';
import Albums from './Albums/Albums';

import React from "react";
import Photos from "./Photos/Photos";

export default function Router() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route  exact path="/" component={User} />
          <Route to  path="/user" component={User} />
          <Route to  path="/comments" component={Comments} />
          <Route to  path="/photos" component={Photos} />
          <Route to  path="/albums" component={Albums} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
