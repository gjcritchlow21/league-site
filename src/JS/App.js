//imports

import React from "react";
import "../App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./header";
import theLeague from "./theLeague";
import codeBeast from "../images/codebeasts.png";
import LeagueHistory from "./leagueHistory";
import CommishComments from "./commish";
import ChatApp from "./chatty";

//react router
//needs setup of pages before work can be done on pages.
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route path={"/theLeague"} component={theLeague} />
        <Route path={"/leagueHistory"} component={LeagueHistory} />
        <Route path={"/commish"} component={CommishComments} />
      </Switch>
    </div>
  );
}
//home page
function Home(props) {
  return (
    <div className="home-wrapper">
      <div className="home-container">
        <div className="home-image-wrapper">
          <img id="beast" src={codeBeast} alt="3peat"></img>
        </div>
        <div className="currentWinner">
          <h1>Congratulations to the 2019-20 Champion</h1>
          <h2>G.J. Critchlow - "Grab 'em by the Percy"</h2>
        </div>
      </div>
      <ChatApp />
    </div>
  );
}

export default App;
