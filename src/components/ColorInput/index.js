import './index.css';

const ColorInput = (props) => {
  return (
    <div class='color-input'>
      <h2 className='color-input-heading'>{ props.label }</h2>
      <input 
      className='number-input' 
      type='tel'  
      maxLength='3'
      minLength='1'
      style={{backgroundColor: props.color}}
      value={props.value}
      />
    </div>
  );
};

export default ColorInput;