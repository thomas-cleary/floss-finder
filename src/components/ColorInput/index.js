import ColorInputHeading from '../ColorInputHeading'
import './index.css';


const ColorInput = (props) => {
  return (
    <div className='color-input dark-bg'>
      <ColorInputHeading color={props.colors.complimentaryColor} />
    </div>
  );
};

export default ColorInput;