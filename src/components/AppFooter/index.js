import "./index.css";

const AppFooter = (props) => {
  const changeColorToInput = (event) =>
    (event.target.style.color = props.inputColor);
  const changeColorToWhite = (event) => (event.target.style.color = "white");

  return (
    <div className="footer dark-bg-small">
      <a
        className="footer-section"
        href="https://github.com/thomas-cleary"
        rel="noreferrer"
        target="_blank"
      >
        <i
          className="fa-brands fa-github footer-icon"
          style={{ color: props.inputColor }}
        ></i>
        <span className="footer-text">thomas-cleary</span>
      </a>
      <a
        className="footer-section"
        href="https://www.dmc.com/us/six-strand-embroidery-floss-9003292.html#null"
        rel="noreferrer"
        target="_blank"
      >
        <i
          className="fa-solid fa-horse-head footer-icon"
          style={{ color: props.inputColor }}
        ></i>
        <span className="footer-text">dmc floss</span>
      </a>
    </div>
  );
};

export default AppFooter;
