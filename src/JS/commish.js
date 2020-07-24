//imports
import React from "react";
import PollQuestion from "./polling.js";

function CommishComments() {
  return (
    <div className="commish-container">
      <div id="commish-header">
        <h1>The Commissioner's Corner</h1>
      </div>
        <PollQuestion />
      <div className="scoring-container">
        <h2>Scoring</h2>
        <div className="scoring-wrapper">
          <div className="offense-container">
            <ul>
              <h3>Offensive Scoring</h3>
              <li>
                Passing Yards: 25 yards per Point, 2 points for 300 yards, 4
                points for 400 yards
              </li>
              <li>Passing TDs: 5 Points</li>
              <li>Interceptions: -1 Point</li>
              <li>
                Rushing Yards: 10 yards per Point, 2 points for 100 yards, 4
                points for 150 yards
              </li>
              <li>Rushing TDs: 6</li>
              <li>
                Receiving Yards: 10 yards per point, 2 points for 100 yards, 4
                points for 150 yards
              </li>
              <li>Receiving TDs: 6 Points</li>
              <li>Return TDs: 6 Points</li>
              <li>2-pt Conversion: 2 Points</li>
              <li>Fumble Lost: -2 Points</li>
              <li>Offensive Fumble Return TD: 6 Points</li>
            </ul>
          </div>
          <div className="defense">
            <ul>
              <h3>Defensive Scoring</h3>
              <li>Sack: 1 Point</li>
              <li>Fumble Recovery: 2 Points</li>
              <li>Interception: 2 Points</li>
              <li>Defensive TD: 6 Points</li>
              <li>Safety: 2 Points</li>
              <li>Block Kick: 2</li>
              <li>Kickoff & Punt Retrun TDs: 6 Points </li>
              <li>
                Points Allowed:
                <ul>
                  <li>0: 15 Points</li>
                  <li>1-6: 7 Points</li>
                  <li>7-13: 4 Points</li>
                  <li>14-20: 1 Point</li>
                  <li>21-27: 0 Points</li>
                  <li>28-34: -1 Point</li>
                  <li>35+: -4 Points</li>
                </ul>
              </li>
              <li>500+ Defensive Yards allowed: -5 Points</li>
              <li>Extra Point Return: 2 Points</li>
            </ul>
          </div>
          <div className="kicking">
            <ul>
              <h3>Kicking</h3>
              <li>PAT Made: 1 Point</li>
              <li>
                Kicking Yardage:
                <ul>
                  <li>0-39: 3 Points</li>
                  <li>40-49: 4 Points</li>
                  <li>50+: 5 Points</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommishComments;
