import "./index.css";

const AppContainer = (props) => {
  return (
    <div 
      className="app-container"
      style={{ backgroundColor: props.inputColor }}
    >
      <div className="app">
        {props.children}
      </div>
    </div>
  );
};

export default AppContainer;
