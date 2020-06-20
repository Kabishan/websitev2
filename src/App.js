import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navigation';
import Landing from './components/landing/Landing';
import Experiences from './components/pages/Experiences';
import Projects from './components/pages/Projects';
import Education from './components/pages/Education';

import './App.css';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />

        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/experiences' component={Experiences} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/education' component={Education} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
