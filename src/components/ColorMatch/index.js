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
          <div className="info">
            <div className="info-label">dmc </div>
            {props.dmcCode}
          </div>
          <div style={props.similarity === "100" ? {color: "goldenrod"} : {}} className="info">
            <span className="info-label">similarity </span>
            {props.similarity}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorMatch;
