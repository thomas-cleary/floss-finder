import './index.css';

const AppHeading = (props) => {
  return (
    <div className='app-heading'>
      <h1 style={{ color: props.inputColor }}>
        floss <span className='emoji' style={{ textShadow: '0 0 0' + props.inputColor }}>🪡</span> finder
      </h1>
    </div>
  );
};

export default AppHeading;