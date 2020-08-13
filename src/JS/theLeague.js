//imports
import React from "react";
import Bomby from "../images/bombyProf.jpg";
import Chris from "../images/chrisProf.jpg";
import Forest from "../images/forestProf.jpg";
import Ricky from "../images/rickyProf.png";
import Tucker from "../images/newTuck-profPic.png";
import Strick from "../images/strickProf.jpg";
import Matt from "../images/matt-prof.jpg";
import Jeff from "../images/jeffProf.jpg";
import Joe from "../images/joeProf.jpg";
import GJ from "../images/codebeasts.png";


function theLeague() {
  return (
    <div classname="member-container">
      <div className="member-head">
        <h1>League Members</h1>
      </div>
      <div className="current-members">
        <div className="bomby-wrapper" id>
          <div id="name">
            <h3>Kyle "Streak" Bombardier</h3>
            <p>Bomby has been the commissioner of this group of ordinary gentleman since it's inception long ago. He's managed to bungle up quite a few things and has had three attempted coups against him, only to maintain power becasue Ricky flip-flops on everything league realted. Hes less popular than NFL commissioner Roger Goodell and that is saying something. However, he recently became a dad to a lovely daughter so we'll give him a pass once again(for now)</p>
            <p>Bomby is a two-time champion with continuous high hopes only to see then dashed come playoff time, much like his beloved Bronco. He's yet to win a Molly but he's close. His knack for hoarding RB's and neglecting other skill positions will inevitably blow up in his face. </p>
          </div>
          <img id="bomby-profPic" src={Bomby} alt="Commish" />
        </div>
        <div className="ricky-wrapper">
          <div id="name">
            <h3>Ricky "Slug" Paparo</h3>
              <p>Ricky's love for crazy is quite evident with his draft process</p>
          </div>
          <img id="ricky-profPic" src={Ricky} alt="slug" />
        </div>
        <div className="gj-wrapper">
          <div id="name">
            <h3>G.J. "Duck" Critchlow</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique risus nec feugiat in fermentum posuere urna nec. Molestie ac feugiat sed lectus. Ornare arcu dui vivamus arcu felis bibendum ut tristique. Pellentesque nec nam aliquam sem et tortor. Phasellus vestibulum lorem sed risus ultricies tristique. Viverra suspendisse potenti nullam ac tortor. Aenean pharetra magna ac placerat vestibulum. Ac tortor vitae purus faucibus ornare suspendisse sed nisi. Nec feugiat nisl pretium fusce id velit. Mus mauris vitae ultricies leo integer malesuada. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Vitae auctor eu augue ut lectus arcu bibendum. Lacinia at quis risus sed vulputate. At urna condimentum mattis pellentesque id. Mauris vitae ultricies leo integer.</p>
          </div>
          <img id="gj-profPic" src={GJ} alt="Champion" />
        </div>
        <div className="chris-wrapper">
          <div id="name">
            <h3>Chris "Clutch" Gendron</h3>
            <p>Chris's fantasy football career has been less of career and more of shit show. Constantly having the right pieces, but nothing to show for it. His affinity for waiver wire claims only illustrates his overthinking and lack of patience.</p>
          </div>
          <img id="chris-profPic" src={Chris} alt="Clutch" />
        </div>
        <div className="matt-wrapper">
          <div id="name">
            <h3>Matt "Efukt" Olson</h3>
            <p>Always a bridesmaid, never a bride, Matt has constructed some pretty formidable teams only to watch them crumble when it matters.  </p>
          </div>
          <img id="matt-profPic" src={Matt} alt="Bedbug" />
        </div>
        <div className="joe-wrapper">
          <div id="name">
            <h3>Joe "Macho Man" Landry</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique risus nec feugiat in fermentum posuere urna nec. Molestie ac feugiat sed lectus. Ornare arcu dui vivamus arcu felis bibendum ut tristique. Pellentesque nec nam aliquam sem et tortor. Phasellus vestibulum lorem sed risus ultricies tristique. Viverra suspendisse potenti nullam ac tortor. Aenean pharetra magna ac placerat vestibulum. Ac tortor vitae purus faucibus ornare suspendisse sed nisi. Nec feugiat nisl pretium fusce id velit. Mus mauris vitae ultricies leo integer malesuada. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Vitae auctor eu augue ut lectus arcu bibendum. Lacinia at quis risus sed vulputate. At urna condimentum mattis pellentesque id. Mauris vitae ultricies leo integer.</p>
          </div>
          <img id="joe-profPic" src={Joe} alt="Joe" />
        </div>    
        <div className="forest-wrapper">
          <div id="name">
            <h3>Forest "For the trees" Westbay</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique risus nec feugiat in fermentum posuere urna nec. Molestie ac feugiat sed lectus. Ornare arcu dui vivamus arcu felis bibendum ut tristique. Pellentesque nec nam aliquam sem et tortor. Phasellus vestibulum lorem sed risus ultricies tristique. Viverra suspendisse potenti nullam ac tortor. Aenean pharetra magna ac placerat vestibulum. Ac tortor vitae purus faucibus ornare suspendisse sed nisi. Nec feugiat nisl pretium fusce id velit. Mus mauris vitae ultricies leo integer malesuada. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Vitae auctor eu augue ut lectus arcu bibendum. Lacinia at quis risus sed vulputate. At urna condimentum mattis pellentesque id. Mauris vitae ultricies leo integer.</p>
          </div>
          <img id="forest-profPic" src={Forest} alt="Forest" />
        </div>
        <div className="strick-wrapper">
          <div id="name">
            <h3>Kyle "Drain" Strickland</h3>
            <p>Widely considered to be one of the worst fantasy managers in the game, Kyle has managed to make the playoffs 3 times, loosing in the first round each time. </p>
          </div>
          <img id="strick-profPic" src={Strick} alt="Standard" />
        </div>
        <div className="jeff-wrapper">
          <div id="name">
            <h3>Jeff Nagle</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique risus nec feugiat in fermentum posuere urna nec. Molestie ac feugiat sed lectus. Ornare arcu dui vivamus arcu felis bibendum ut tristique. Pellentesque nec nam aliquam sem et tortor. Phasellus vestibulum lorem sed risus ultricies tristique. Viverra suspendisse potenti nullam ac tortor. Aenean pharetra magna ac placerat vestibulum. Ac tortor vitae purus faucibus ornare suspendisse sed nisi. Nec feugiat nisl pretium fusce id velit. Mus mauris vitae ultricies leo integer malesuada. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Vitae auctor eu augue ut lectus arcu bibendum. Lacinia at quis risus sed vulputate. At urna condimentum mattis pellentesque id. Mauris vitae ultricies leo integer.</p>
          </div>
          <img id="jeff-profPic" src={Jeff} alt="Jefe" />
        </div>
        <div className="tucker-wrapper">
          <div id="name">
            <h3>Tucker "Taco" Labare</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique risus nec feugiat in fermentum posuere urna nec. Molestie ac feugiat sed lectus. Ornare arcu dui vivamus arcu felis bibendum ut tristique. Pellentesque nec nam aliquam sem et tortor. Phasellus vestibulum lorem sed risus ultricies tristique. Viverra suspendisse potenti nullam ac tortor. Aenean pharetra magna ac placerat vestibulum. Ac tortor vitae purus faucibus ornare suspendisse sed nisi. Nec feugiat nisl pretium fusce id velit. Mus mauris vitae ultricies leo integer malesuada. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Vitae auctor eu augue ut lectus arcu bibendum. Lacinia at quis risus sed vulputate. At urna condimentum mattis pellentesque id. Mauris vitae ultricies leo integer.</p>
          </div>
          <img id="tucker-profPic" src={Tucker} alt="Taco" />
        </div>
      </div>
    </div>
  );
}

export default theLeague;
