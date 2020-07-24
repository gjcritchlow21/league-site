//imports
import React from "react";
import ImageCarousel from "./imageCar";
import Beasts from "../images/codebeasts.png";
import Joeship from "../images/joePorn.jpg";
import Bomby from "../images/bombyProf.jpg";
import Forest from "../images/forestProf.jpg";
import Dan from "../images/dan.jpg";

function LeagueHistory() {
  return (
    <div className="history-container">
      <div className="history-header">
        <h1>History of the League</h1>
      </div>
      <div className="carousel">
        <ImageCarousel />
      </div>
      <div id="past-header">
        <h2>Past Finishes</h2>
      </div>
      <div className="pastYears-container">
        <div className="finishes">
          <div className="name-wrapper">
            <h2>2019</h2>
            <h3>Cone: G.J.</h3>
            <h3>Molly: Chris</h3>
          </div>
          <div className="win-pic">
            <img id="champPic" src={Beasts} alt="gj" />
          </div>
        </div>
        <div className="finishes">
          <div className="name-wrapper">
            <h2>2018</h2>
            <h3>Cone: Joe</h3>
            <h3>Molly: Ricky</h3>
          </div>
          <div className="win-pic">
            <img id="champPic" src={Joeship} alt="joe" />
          </div>
        </div>
        <div className="finishes">
          <div className="name-wrapper">
            <h2>2017</h2>
            <h3>Cone: Bomby</h3>
            <h3>Molly: Taco</h3>
          </div>
          <div className="win-pic">
            <img id="champPic" src={Bomby} alt="joe" />
          </div>
        </div>
        <div className="finishes">
          <div className="name-wrapper">
            <h2>2016</h2>
            <h3>Cone: Forest</h3>
            <h3>Molly: G.J.</h3>
          </div>
          <div className="win-pic">
            <img id="champPic" src={Forest} alt="joe" />
          </div>
        </div>
        <div className="finishes">
          <div className="name-wrapper">
            <h2>2015</h2>
            <h3>Cone: G.J.</h3>
            <h3>Molly: Strick</h3>
          </div>
          <div className="win-pic">
            <img id="champPic" src={Beasts} alt="joe" />
          </div>
        </div>
        <div className="finishes">
          <div className="name-wrapper">
            <h2>2014</h2>
            <h3>Cone: Dan</h3>
            <h3>Molly: Ricky</h3>
          </div>
          <div className="win-pic">
            <img id="champPic" src={Dan} alt="joe" />
          </div>
        </div>
        <div className="finishes">
          <div className="name-wrapper">
            <h2>2013</h2>
            <h3>Cone: G.J.</h3>
            <h3>Molly: Dan</h3>
          </div>
          <div className="win-pic">
            <img id="champPic" src={Beasts} alt="joe" />
          </div>
        </div>
        <div className="finishes">
          <div className="name-wrapper">
            <h2>2012</h2>
            <h3>Cone: Bomby</h3>
            <h3>Molly: Gendron</h3>
          </div>
          <div className="win-pic">
            <img id="champPic" src={Bomby} alt="joe" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeagueHistory;
