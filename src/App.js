import { useState } from 'react';
import AppContainer from "./components/AppContainer";
import AppHeading from './components/AppHeading';


const App = () => {
  // const [inputColour, setInputColour] = useState(13408737);
  // console.log(inputColour);

  const inputColor = '#FF8C32';

  return (
    <AppContainer inputColor={inputColor}>
      <AppHeading inputColor={inputColor} />
    </AppContainer>
  );
};

export default App;
