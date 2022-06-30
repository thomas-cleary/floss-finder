import { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { getRandomInt } from "./utils/random";
import { RGB_MAX } from "./utils/constants";
import rgbToHex from "./utils/rgbToHex";
import AppContainer from "./components/AppContainer";
import AppHeading from "./components/AppHeading";
import ColorInputs from "./components/ColorInputs";
import ColorMatch from "./components/ColorMatch";
import "./App.css";

const App = () => {
  const [red, setRed] = useState(getRandomInt(RGB_MAX));
  const [green, setGreen] = useState(getRandomInt(RGB_MAX));
  const [blue, setBlue] = useState(getRandomInt(RGB_MAX));

  const inputColor = rgbToHex(red, green, blue);

  const randomizeColor = () => {
    setRed(getRandomInt(RGB_MAX));
    setGreen(getRandomInt(RGB_MAX));
    setBlue(getRandomInt(RGB_MAX));
  };

  return (
    <HelmetProvider>
      <Helmet>
        {/* TODO: Adjust colour to work with prefered color scheme */}
        <meta
          name="theme-color"
          content={inputColor}
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content={inputColor}
          media="(prefers-color-scheme: dark)"
        />
      </Helmet>
      <AppContainer inputColor={inputColor}>
        <AppHeading inputColor={inputColor} onEmojiClick={randomizeColor} />
        <ColorInputs
          inputColor={inputColor}
          values={{ red, green, blue }}
          onChange={{ setRed, setGreen, setBlue }}
        />
        <ColorMatch 
          matchedColor={rgbToHex(Math.min(red + 10, RGB_MAX), Math.min(green - 10 < 0 ? 0 : green - 10, RGB_MAX), Math.min(blue + 10, RGB_MAX))} 
          dmcCode="1234"
          similarity="94"
        />
        <ColorMatch 
          matchedColor={rgbToHex(Math.min(red + 20, RGB_MAX), Math.min(green + 20, RGB_MAX), Math.min(blue - 20 < 0 ? 0 : blue - 20, RGB_MAX))} 
          dmcCode="2341"
          similarity="77"
        />
        <ColorMatch 
          matchedColor={rgbToHex(Math.min(red - 30 < 0 ? 0 : red - 30, RGB_MAX), Math.min(green + 30, RGB_MAX), Math.min(blue + 30, RGB_MAX))} 
          dmcCode="3412"
          similarity="45"
        />
      </AppContainer>
    </HelmetProvider>
  );
};

export default App;
