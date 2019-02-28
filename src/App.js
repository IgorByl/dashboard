import React, { Fragment } from 'react';
import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Dashboard from './components/containers/Dashboard';
import FormView from './components/containers/FormView';

const history = createBrowserHistory();

const App = () => (
    <Router history={history} basename={process.env.PUBLIC_URL}>
      <Fragment>
        <Route exact path="/" component={FormView} />
        <Route path="/success" component={Dashboard} />
      </Fragment>
    </Router>
);

export default App;
