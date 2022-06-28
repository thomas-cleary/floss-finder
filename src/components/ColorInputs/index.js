import ColorInput from '../ColorInput';
import './index.css';


const ColorInputs = (props) => {
  return (
    <div className='color-inputs dark-bg'>
      <ColorInput color={props.inputColor} value={props.values.red} label='R' />
      <ColorInput color={props.inputColor} value={props.values.green} label='G' />
      <ColorInput color={props.inputColor} value={props.values.blue} label='B' />
    </div>
  );
};

export default ColorInputs;