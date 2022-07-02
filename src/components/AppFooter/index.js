import "./index.css";

const AppFooter = (props) => {
  const changeColorToInput = (event) => (event.target.style.color = props.inputColor);
  const changeColorToWhite = (event) => (event.target.style.color = "white");

  return (
    <div className="footer dark-bg">
      <a
        className="icon"
        href="https://github.com/thomas-cleary"
        rel="noreferrer"
        target="_blank"
        onMouseEnter={changeColorToInput}
        onMouseLeave={changeColorToWhite}
      >
        <i className="fa fa-github"></i>
      </a>
      <i
        className="fa fa-info-circle icon"
        onMouseEnter={changeColorToInput}
        onMouseLeave={changeColorToWhite}
      ></i>
      <i
        className="fa fa-cog icon"
        onMouseEnter={changeColorToInput}
        onMouseLeave={changeColorToWhite}
      ></i>
    </div>
  );
};

export default AppFooter;
