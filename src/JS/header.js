//imports
import React from "react";
import { Link } from "react-router-dom";
import Field from "../images/field.jpg"


//header with navigation through router
function Header(props) {
  return (
    <div className="header-container" >
      <img className="background-image" src={Field} alt="field" />
      <div id="name-header">
        <Link id="home-link" to={"/"}>
          <h1>The League</h1>
        </Link>
      </div>
      <div id="page-nav">
        <Link id="head-links" to={"/powerRankings"}>
          Power Rankings
        </Link>
        <Link id="head-links" to={"/theLeague"}>
          Members
        </Link>
        <Link id="head-links" to={"/leagueHistory"}>
          HIStory
        </Link>
        <Link id="head-links" to={"/commish"}>
          Commish
        </Link>
      </div>
    </div>
  );
}

export default Header;
