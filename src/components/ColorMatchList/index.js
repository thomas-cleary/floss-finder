import { RGB_MAX } from "../../utils/constants";
import { getRandomInt } from "../../utils/random";
import ColorMatch from "../ColorMatch";
import rgbToHex from "../../utils/rgbToHex";
import "./index.css";

const ColorMatchList = ({ red, green, blue, inputColor }) => {
  // from props.inputColor calculate the color matches
  // render a list of ColorMatch components
  const getRandomMatches = (size) => {
    const matches = [];

    for (let i = 0; i < size; i++) {
      matches.push(
        <ColorMatch
          key={i.toString()}
          matchedColor={rgbToHex(
            getRandomInt(RGB_MAX),
            getRandomInt(RGB_MAX),
            getRandomInt(RGB_MAX)
          )}
          dmcCode={getRandomInt(4000).toString()}
          similarity={getRandomInt(44).toString()}
          colorName="random color name"
        />
      );
    }

    return matches;
  };

  return (
    <div className="color-match-list dark-bg">
      <h1 className="color-match-list-heading">matches</h1>
      <ColorMatch
        matchedColor={rgbToHex(
          Math.min(red + 10, RGB_MAX),
          Math.min(green - 10 < 0 ? 0 : green - 10, RGB_MAX),
          Math.min(blue + 10, RGB_MAX)
        )}
        dmcCode={getRandomInt(4000).toString()}
        similarity={getRandomInt(100).toString()}
        colorName="color name"
      />
      <ColorMatch
        matchedColor={rgbToHex(
          Math.min(red + 20, RGB_MAX),
          Math.min(green + 20, RGB_MAX),
          Math.min(blue - 20 < 0 ? 0 : blue - 20, RGB_MAX)
        )}
        dmcCode={getRandomInt(4000).toString()}
        similarity={getRandomInt(100).toString()}
        colorName="color name"
      />
      <ColorMatch
        matchedColor={rgbToHex(
          Math.min(red - 30 < 0 ? 0 : red - 30, RGB_MAX),
          Math.min(green + 30, RGB_MAX),
          Math.min(blue + 30, RGB_MAX)
        )}
        dmcCode={getRandomInt(4000).toString()}
        similarity={getRandomInt(100).toString()}
        colorName="color name"
      />
      {getRandomMatches(100)}
    </div>
  );
};

export default ColorMatchList;
