import './index.css';

const AppHeading = (props) => {
  return (
    <div className='app-heading dark-bg'>
      <h1 style={{ color: props.colors.complimentaryColor }}>
        floss&nbsp;
        <span className='emoji' style={{ textShadow: '0 0 0' + props.colors.inputColor }}>
          🪡
        </span> 
        &nbsp;finder
      </h1>
    </div>
  );
};

export default AppHeading;