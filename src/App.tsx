import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './layout';
import Home from './pages/Home';
import Todos from './pages/Todos';
import NotFound from './pages/NotFound';

const App = (): JSX.Element => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path={['/', '/home']} component={Home} />
        <Route path='/todos' component={Todos} />
        <Route path='*' component={NotFound} />
      </Switch>
    </Layout>
  </Router>
);

export default App;
