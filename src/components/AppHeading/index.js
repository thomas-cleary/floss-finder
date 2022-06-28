import "./index.css";

const AppHeading = (props) => {
  return (
    <div className="app-heading dark-bg">
      <h1><i>floss</i>&nbsp;</h1>
      <h1>
        <span
          className="emoji"
          style={{ textShadow: "0 0 0 " + props.inputColor }}
        >
          🪡
        </span>
      </h1>
      <h1>&nbsp;<i>finder</i></h1>
    </div>
  );
};

export default AppHeading;
