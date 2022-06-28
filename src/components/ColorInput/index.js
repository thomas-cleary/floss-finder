import './index.css';


const isValidRgbValue = (input) => {
  const isNotNan = !Number.isNaN(input);
  const isInRgbRange = input <= 255 && input >= 0;

  return isNotNan && isInRgbRange;
}


const ColorInput = (props) => {
  const onNumberChange = (event) => {
    const input = Number(event.target.value);
    isValidRgbValue(input)
      ? props.onChange(input)
      : console.log('Invalid input');
  };

  return (
    <div className='color-input'>
      <h2 
      className='color-input-heading'
      style={{color: props.inputColor === "#000000" ? 'white' : props.inputColor}}
      >{ props.label }</h2>
      <input 
      className='number-input' 
      value={props.value}
      type='tel'  
      maxLength='3'
      minLength='1'
      onChange={onNumberChange}
      />
    </div>
  );
};

export default ColorInput;