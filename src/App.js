import { useState } from 'react';
import rgbToHex from './utils/rgbToHex';
import AppContainer from './components/AppContainer';
import AppHeading from './components/AppHeading';
import ColorInputs from './components/ColorInputs';
import './App.css';


const App = () => {
  const [red, setRed] = useState(255);
  const [green, setGreen] = useState(120);
  const [blue, setBlue] = useState(30);

  const inputColor = rgbToHex(red, green, blue);

  return (
    <AppContainer inputColor={inputColor}>
      <AppHeading inputColor={inputColor} />
      <ColorInputs 
      inputColor={inputColor} 
      values={{ red, green, blue }}
      onChange={{setRed, setGreen, setBlue}}
      />
    </AppContainer>
  );
};

export default App;
