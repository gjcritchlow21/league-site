import React, { useState } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import IconButton from "@material-ui/core/IconButton";
import Govt from "../images/shadowGovt.jpg";
import Sleep from "../images/chrisSleep.jpg";
import Beer from "../images/joeBeer.jpg";
import BombBowl from "../images/bombyProbowl.JPEG";
import Boyz from "../images/boysDraft.JPG";
import Boyz2 from "../images/boysDraft2.JPG";
import KyleChris from "../images/kyleChris.png";
import ProBowl from "../images/proBowl.JPEG";
import Flag from "../images/USA.JPEG";
import Tent from "../images/tentBowl.JPG";
import Draft1 from "../images/draft1.JPG";
import Draft2 from "../images/draft2.JPG";
import Draft3 from "../images/draft3.JPG";
import Draft4 from "../images/draft4.JPG";
import Draft16 from "../images/draft16.JPG";
import Draft18 from "../images/draft18.JPG";
import Draft19 from "../images/draft19.JPEG";

const imgArray = [
  Draft2,
  Govt,
  Draft4,
  Sleep,
  Draft18,
  Beer,
  BombBowl,
  Draft1,
  Boyz,
  Draft3,
  Boyz2,
  Draft16,
  KyleChris,
  Draft19,
  ProBowl,
  Flag,
  Tent,
];

const ImageCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleNav = (direction) => {
    let newIndex;
    if (direction === "right") {
      index === imgArray.length - 1 ? (newIndex = 0) : (newIndex = index + 1);
    } else {
      index === 0 ? (newIndex = imgArray.length - 1) : (newIndex = index - 1);
    }
    setIndex(newIndex);
  };

  console.log(index);

  return (
    <div className="ImageCarousel">
      <div id="rotating-carousel">
        <IconButton
          onClick={() => {
            handleNav("left");
          }}
        >
          <ArrowBackIosIcon fontSize="large" />
        </IconButton>
        <div id="carousel">
          <img
            className="sm-img-left"
            src={
              index === imgArray.length - 1 ? imgArray[0] : imgArray[index + 1]
            }
            alt="sm-img"
          />
          <img className="lg-img" src={imgArray[index]} alt="card" />
          <img
            className="sm-img-right"
            src={
              index === 0 ? imgArray[imgArray.length - 1] : imgArray[index - 1]
            }
            alt="sm-img"
          />
        </div>
        <IconButton
          onClick={() => {
            handleNav("right");
          }}
        >
          <ArrowForwardIosIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
};

export default ImageCarousel;
