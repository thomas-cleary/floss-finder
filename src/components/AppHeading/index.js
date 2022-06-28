import "./index.css";

const AppHeading = (props) => {
  return (
    <div className="app-heading dark-bg">
      <h1>floss&nbsp;&nbsp;</h1>
      <h1>
        <span
          className="emoji"
          style={{ textShadow: "0 0 0 " + props.inputColor }}
          onClick={props.onEmojiClick}
        >
          🪡
        </span>
      </h1>
      <h1>&nbsp;&nbsp;finder</h1>
    </div>
  );
};

export default AppHeading;
