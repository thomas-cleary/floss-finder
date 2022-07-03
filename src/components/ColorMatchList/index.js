import { useState } from "react";
import { RGB_MAX } from "../../utils/constants";
import { getRandomInt } from "../../utils/random";
import ColorMatch from "../ColorMatch";
import rgbToHex from "../../utils/rgbToHex";
import getDmcMatches from "../../utils/getDmcMatches";
import "./index.css";

const ColorMatchList = ({ red, green, blue, inputColor }) => {
  const matches = getDmcMatches({ red, green, blue });

  const getColorMatches = () => {
    return matches.map((color) => {
      return (
        <ColorMatch
          key={color.dmcCode}
          matchedColor={color.hexCode}
          colorName={color.flossName.toLowerCase()}
          dmcCode={color.dmcCode}
          similarity={color.similarity}
        />
      );
    });
  };

  return (
    <div className="color-match-list dark-bg">
      <h1 className="color-match-list-heading">matches</h1>
      {getColorMatches()}
    </div>
  );
};

export default ColorMatchList;
