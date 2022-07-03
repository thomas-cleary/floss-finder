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
      similarity:
        Math.round((100 - (distance * 100) / MAX_RGB_DISTANCE) * 100) / 100,
    };
  });
  return matches.sort(compareDistance).slice(0, 10);

};

export default getDmcMatches;
