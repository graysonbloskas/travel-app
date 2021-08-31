import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import './components/Button.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import Locations from './components/pages/Locations'
import Signup from './components/pages/Signup'

function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/services" component={Services} />
      <Route path="/locations" component={Locations} />
      <Route path="/sign-up" component={Signup} />
    </Switch>
    </Router>
      
    </>
  );
}

export default App;
