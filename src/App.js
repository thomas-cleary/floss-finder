import { useState } from 'react';
import AppContainer from "./components/AppContainer";
import AppHeading from './components/AppHeading';
import ColorInput from './components/ColorInput';
import './App.css';


const App = () => {
  // const [inputColour, setInputColour] = useState(13408737);
  // console.log(inputColour);

  const inputColor = '#8BBFFB';
  const complimentaryColor = '#FBC78B';
  const colors = { inputColor, complimentaryColor };
  // const inputColor = '#FFFFFF';

  return (
    <AppContainer colors={colors}>
      <AppHeading colors={colors} />
      <ColorInput colors={colors}/>
    </AppContainer>
  );
};

export default App;
