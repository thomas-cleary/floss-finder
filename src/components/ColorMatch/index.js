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
          <div className="info">
            <span className="info-label">similarity </span>
            <span className={props.similarity === "100" ? "perfect-match" : ""}>
              {props.similarity}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorMatch;
