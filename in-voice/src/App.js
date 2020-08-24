import React from 'react';
import 'antd/dist/antd.css';  
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Signin from "./containers/signin";
import './App.css';
import Dashboard from './containers/dashboard';
import Miscallenous from './containers/miscallenous';

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route exact path={'/'} component={Signin} />
            <Route path={'/dashboard'} component={Dashboard} />
            <Route path='*' exact  component={Miscallenous}/>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
