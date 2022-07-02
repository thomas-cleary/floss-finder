import "./index.css";

const ColorMatch = (props) => {
  return (
    <div
      className="color-match"
      style={{ backgroundColor: props.matchedColor }}
    >
      <div className="color-match-info">
        <p className="info-heading">{props.colorName}</p>
        <div className="info">
          <p className="info">{props.dmcCode}</p>
          <p className="info">{props.similarity}%</p>
        </div>
      </div>
    </div>
  );
};

export default ColorMatch;
