import dmcData from "../data/dmcData.js";
import rgbDistance from "./rgbDistance";

const MAX_RGB_DISTANCE = Math.sqrt(3 * 255 ** 2);

const compareDistance = (dmcColor1, dmcColor2) => {
  if (dmcColor1.distance < dmcColor2.distance) {
    return -1;
  }
  if (dmcColor1.distance > dmcColor2.distance) {
    return 1;
  }
  return 0;
};

const getDmcMatches = (color) => {
  const matches = Object.entries(dmcData).map(([key, value]) => {
    const distance = rgbDistance(color, {
      red: value.red,
      green: value.green,
      blue: value.blue,
    });
    return {
      ...value,
      distance,
      similarity: (100 - (distance * 100) / MAX_RGB_DISTANCE).toFixed(0),
    };
  });
  const sortedMatches = matches.sort(compareDistance);
  const goodMatches = sortedMatches.filter(match => match.similarity >= 90);

  return goodMatches.length > 0 ? goodMatches : sortedMatches.slice(0, 5);
};

export default getDmcMatches;
