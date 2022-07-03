import "./index.css";

const ColorMatch = (props) => {
  return (
    <div
      className="color-match"
      style={{ backgroundColor: props.matchedColor }}
    >
      <div className="color-match-info">
        <p className="info-heading">{props.colorName}</p>
        <div className="info-boxes">
          <div className="info"><span className="info-label">DMC </span>{props.dmcCode}</div>
          <div className="info"><span className="info-label">similarity </span>{props.similarity}%</div>
        </div>
      </div>
    </div>
  );
};

export default ColorMatch;