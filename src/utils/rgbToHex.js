const rgbToHex = (red, green, blue) => {
  return "#".concat(
    [red, green, blue]
      .map((color) => {
        const hexString = color.toString(16);
        return hexString.length === 1 ? "0".concat(hexString) : hexString;
      })
      .join("")
      .toUpperCase()
  );
};

export default rgbToHex;
