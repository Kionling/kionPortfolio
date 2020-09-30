import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from "../src/pages/Home/home"
import Portfolio from "../src/pages/Portfolio/portfolio"
import Contact from "../src/pages/Contact/contact"
import About from "../src/pages/About/about"
import NoMatch from "../src/pages/NoMatch/noMatch"
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/portfolio" component={Portfolio}/>
        <Route exact path="/aboutMe" component={About}/>
        <Route component={NoMatch}/>
      </Switch>
    </Router>
  );
}

export default App;
