import './index.css';

const AppContainer = (props) => {

  return (
    <div 
    className='app'
    style={{ backgroundColor: props.inputColor }}>
      {props.children}
    </div>
  );
};

export default AppContainer;