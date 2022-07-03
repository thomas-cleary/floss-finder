const rgbDistance = (color1, color2) => {
  return Math.sqrt(
    (color1.red - color2.red) ** 2 +
      (color1.green - color2.green) ** 2 +
      (color1.blue - color2.blue) ** 2
  );
};

export default rgbDistance;
