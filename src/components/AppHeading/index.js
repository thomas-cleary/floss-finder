import './index.css';

const AppHeading = (props) => {
  return (
    <div className='app-heading dark-bg'>
      <h1>
        floss&nbsp;
      </h1>
      <h1>
        <span className='emoji' style={{ textShadow: '0 0 0 ' + (props.inputColor) }}>
          🪡
        </span> 
      </h1>
      <h1>
        &nbsp;finder
      </h1>
    </div>
  );
};

export default AppHeading;