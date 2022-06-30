import { RGB_MAX, RGB_MIN } from "../../utils/constants";
import "./index.css";

const isValidInput = (input) => {
  const isNotNan = !Number.isNaN(input);
  // Other rules

  return isNotNan;
};

const constrainToRgbValues = (input) => {
  return input <= RGB_MIN ? RGB_MIN : input >= RGB_MAX ? RGB_MAX : input;
};

const ColorInput = (props) => {
  const onNumberChange = (event) => {
    const input = Number(event.target.value); // Number("") is 0

    isValidInput(input)
      ? props.onChange(constrainToRgbValues(input))
      : console.log("Invalid input");
  };

  return (
    <div className="color-input">
      <label for={props.label.concat('input')}>
        <h2 className="color-input-heading">{props.label}</h2>
      </label>
      <input
        className="number-input"
        value={props.value}
        type="tel"
        maxLength="3"
        id={props.label.concat('input')}
        onChange={onNumberChange}
      />
    </div>
  );
};

export default ColorInput;
