import ColorInput from "../ColorInput";
import "./index.css";

const ColorInputs = (props) => {
  return (
    <div className="color-inputs dark-bg">
      <ColorInput
        inputColor={props.inputColor}
        value={props.values.red}
        label="R"
        onChange={props.onChange.setRed}
      />
      <ColorInput
        inputColor={props.inputColor}
        value={props.values.green}
        label="G"
        onChange={props.onChange.setGreen}
      />
      <ColorInput
        inputColor={props.inputColor}
        value={props.values.blue}
        label="B"
        onChange={props.onChange.setBlue}
      />
    </div>
  );
};

export default ColorInputs;
