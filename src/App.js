import { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { getRandomInt } from "./utils/random";
import rgbToHex from "./utils/rgbToHex";
import AppContainer from "./components/AppContainer";
import AppHeading from "./components/AppHeading";
import ColorInputs from "./components/ColorInputs";
import "./App.css";

const RGB_MAX = 255;

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
        <meta name="theme-color" content={inputColor} />
      </Helmet>
      <AppContainer inputColor={inputColor}>
        <AppHeading inputColor={inputColor} onEmojiClick={randomizeColor}/>
        <ColorInputs
          inputColor={inputColor}
          values={{ red, green, blue }}
          onChange={{ setRed, setGreen, setBlue }}
        />
      </AppContainer>
    </HelmetProvider>
  );
};

export default App;
