import "./index.css";

const AppHeading = (props) => {
  return (
    <div className="app-heading dark-bg">
      <h1>floss</h1>
      <h1>
        <span
          className="emoji"
          style={{ textShadow: "0 0 0 white" }}
          onClick={props.onEmojiClick}
        >
          🧵
        </span>
      </h1>
      <h1>finder</h1>
    </div>
  );
};

export default AppHeading;
