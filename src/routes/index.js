import React from 'react';
import {Route} from 'react-router-dom';
import App from './../components/App';
// import Grid from './../components/Grid';
import Checkers from './../components/Checker';

const createRoutes = () => {
  return(
    <div className="container">
      <Route exact path="/" component={Checkers} />
      <Route path="/grid" component={App} />
    </div>
  );
};

const Routes = createRoutes();

export default Routes;