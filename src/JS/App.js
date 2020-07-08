//imports

import React from 'react';
import '../App.css';
import Header from './Header';
//import About from './About'
//import Portfolio from './Portfolio'
import { Switch, Route } from 'react-router-dom';
import codeBeast from '../images/codebeasts.png'


//react router
//needs setup of pages before work can be done on pages.
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path={'/'} component={Home} />
        //<Route path={'/about'} component={About} />
        //<Route path={'/portfolio'} component={Portfolio} />
      </Switch>
    </div>

  );
}
//home page
function Home(props) {
  return (
    <div className="home-container">
      <div id="homeTop-wrapper">
        <div id='curretnWinner'>
          <h1>Congratulations to the 2019-20 Champion</h1>
        </div>
        <div id='home-image-wrapper'>
          <img id="beast" src={codeBeast}></img>
        </div>
      </div>
    </div>
  )
}

export default App; 