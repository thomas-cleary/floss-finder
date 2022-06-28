import { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { getRandomInt } from "./utils/random";
import rgbToHex from "./utils/rgbToHex";
import AppContainer from "./components/AppContainer";
import AppHeading from "./components/AppHeading";
import ColorInputs from "./components/ColorInputs";
import "./App.css";

const App = () => {
  const [red, setRed] = useState(getRandomInt(255));
  const [green, setGreen] = useState(getRandomInt(255));
  const [blue, setBlue] = useState(getRandomInt(255));

  const inputColor = rgbToHex(red, green, blue);

  return (
    <HelmetProvider>
      <Helmet>
        <meta name="theme-color" content={inputColor} />
      </Helmet>
      <AppContainer inputColor={inputColor}>
        <AppHeading inputColor={inputColor} />
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
