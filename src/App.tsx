import React from 'react';
import Layout from './layout';
import Home from './pages/Home';
import NotFound from './pages/Error'
import Todos from './pages/Todos'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = (): JSX.Element => (
  
    <Router>
      <Layout>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/home" exact component={Home}/>
        <Route path="/todos" exact component={Todos}/>
        <Route  component={NotFound}/>
      </Switch>
      </Layout>
    </Router>
  
);

export default App;
