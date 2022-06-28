import { useState } from 'react';
import AppContainer from "./components/AppContainer";
import AppHeading from './components/AppHeading';
import ColorInputs from './components/ColorInputs';
import './App.css';


const App = () => {
  const [red, setRed] = useState(174);
  const [green, setGreen] = useState(128);
  const [blue, setBlue] = useState(219);

  const inputColor = '#AE80DB';
  // const inputColor = '#FFFFFF';

  return (
    <AppContainer inputColor={inputColor}>
      <AppHeading inputColor={inputColor} />
      <ColorInputs inputColor={inputColor} values={{ red, green, blue }}/>
    </AppContainer>
  );
};

export default App;
