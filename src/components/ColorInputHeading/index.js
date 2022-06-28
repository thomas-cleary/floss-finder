import './index.css';

const ColorInputHeading = ({ color }) => {
  return (
    <>
      <h2 className='color-input-heading' style={{ color }}>R</h2>
      <h2 className='color-input-heading' style={{ color }}>G</h2>
      <h2 className='color-input-heading' style={{ color }}>B</h2>
    </>
  );
};

export default ColorInputHeading;