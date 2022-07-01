import "./index.css";

const ColorMatch = (props) => {
  return (
    <div
      className="color-match"
      style={{ backgroundColor: props.matchedColor }}
    >
      <div className="color-match-info">
        <p>{props.dmcCode}</p>
        <p>{props.similarity}%</p>
      </div>
    </div>
  );
};

export default ColorMatch;
