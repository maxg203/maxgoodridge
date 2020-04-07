import React from 'react';
import './App.css';

import Home from './Pages/Home'
import About from './Pages/About'
import Timeline from './Pages/Timeline'

import Custom404 from './404'
import TopSectionGraphic from './top-section-white.svg'

import {
  HashRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

const TopSection = ({ home, about, timeline }) => (
  <div className={`top-section${home ? " home" : ""}`}>
    <header>
      <span className="navbar-logo"><a href="/">Max Goodridge</a></span>
      <nav>
        <ul className="navbar">
          <li>
            <NavLink exact to="/" className="navlink">Home</NavLink>
          </li>
          <li>
            <NavLink exact to="/about" className="navlink">About</NavLink>
          </li>
          <li>
            <NavLink exact to="/timeline" className="navlink">Timeline</NavLink>
          </li>
        </ul>
      </nav>
    </header>
    { home && <div className="content-container">
      <img src={TopSectionGraphic} alt="Software Engineering X Animal Rights" />
      <h2 className="top-section-subtitle">Using tech to end the world's largest forms of oppression.</h2>
    </div>}
  </div>
)

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/timeline">
            <TopSection timeline />
            <Timeline />
          </Route>
          <Route exact path="/about">
            <TopSection about />
            <About />
          </Route>
          <Route exact path="/">
            <TopSection home />
            <Home />
          </Route>

          <Route component={Custom404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
