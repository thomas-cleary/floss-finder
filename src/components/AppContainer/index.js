import './index.css';

const AppContainer = (props) => {

  return (
    <div 
    className='app'
    style={{ backgroundColor: props.colors.inputColor }}>
      {props.children}
    </div>
  );
};

export default AppContainer;