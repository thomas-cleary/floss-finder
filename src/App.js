const App = () => {
  const appStyle = {
    height: '100vh',
    width: '100vw',
    backgroundColor: '#D32634'
  };

  const rgbStyle = {
    height: '28%',
    backgroundColor: '#D32634',
  };

  const headingStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.80)',
    color: '#D32634',
    padding: '8px',
    textAlign: 'center',
    alignItems: 'center',
  };

  const dmcStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    height: '60%',
    backgroundColor: '#D32634',
    paddingBottom: '16px',
  };

  const matchStyle = {
    display: 'flex',
    alignItems: 'center',
    height: '20%',
    margin: '0 30px 0 30px',
    color: 'white',
    borderRadius: '8px',
    border: '4px solid rgba(0, 0, 0, 0.45)',
    fontSize: '1.5rem',
  };

  return (
    <div style={appStyle}>
      <div style={rgbStyle}>
        <div style={headingStyle}>
          <h1>floss finder</h1>
        </div>
        <div style={{backgroundColor: 'rgba(0, 0, 0, 0.80)', margin: '60px 30px 0px 30px', padding: '8px', borderRadius: '8px'}}>
          <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', fontSize: '1.5rem'}}>
            <p style={{color: '#D32634'}}>R</p>
            <p style={{color: '#D32634'}}>G</p>
            <p style={{color: '#D32634'}}>B</p>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', fontSize: '2rem', color: 'white'}}>
            <p>197</p>
            <p>57</p>
            <p>56</p>
          </div>
        </div>
      </div>

      <div></div>
      
      <div style={{...dmcStyle}}>
        <div style={ {...matchStyle, backgroundColor: '#C83744'} }>
          <div style={{display: 'flex', justifyContent: 'space-evenly', flex: '1', backgroundColor: 'rgba(0, 0, 0, 0.45)', margin: '0px 16px 0px 16px', padding: '8px', borderRadius: '4px'}}>
            <p>606</p>
            <p>88%</p>
          </div>
        </div>
        <div style={ {...matchStyle, backgroundColor: '#BC343E'} }>
          <div style={{display: 'flex', justifyContent: 'space-evenly', flex: '1', backgroundColor: 'rgba(0, 0, 0, 0.45)', margin: '0px 16px 0px 16px', padding: '8px', borderRadius: '4px'}}>
            <p>304</p>
            <p>69%</p>
          </div>
        </div>
        <div style={ {...matchStyle, backgroundColor: '#EF103C'} }>
          <div style={{display: 'flex', justifyContent: 'space-evenly', flex: '1', backgroundColor: 'rgba(0, 0, 0, 0.45)', margin: '0px 16px 0px 16px', padding: '8px', borderRadius: '4px'}}>
            <p>666</p>
            <p>65%</p>
          </div>
        </div>
        <div style={ {...matchStyle, backgroundColor: '#DA3825'} }>
          <div style={{display: 'flex', justifyContent: 'space-evenly', flex: '1', backgroundColor: 'rgba(0, 0, 0, 0.45)', margin: '0px 16px 0px 16px', padding: '8px', borderRadius: '4px'}}>
            <p>321</p>
            <p>32%</p>
          </div>
        </div>
        <div style={ {...matchStyle, backgroundColor: '#BD462E'} }>
          <div style={{display: 'flex', justifyContent: 'space-evenly', flex: '1', backgroundColor: 'rgba(0, 0, 0, 0.45)', margin: '0px 16px 0px 16px', padding: '8px', borderRadius: '4px'}}>
            <p>498</p>
            <p>10%</p>
          </div>
        </div>
      </div>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '15px'}}>
        <p style={{padding: '8px', color: '#D32634', backgroundColor: 'rgba(0, 0, 0, 0.8)', borderRadius: '8px', width: '70px', textAlign: 'center'}}>DMC</p>
        <input type="checkbox" id="switch" /><label for="switch">Toggle</label>
        <p style={{padding: '8px', color: 'rgb(128, 128, 128)', backgroundColor: 'rgba(0, 0, 0, 0.8)', borderRadius: '8px', marginLeft: '7px', width: '70px', textAlign: 'center'}}>Anchor</p>
      </div>
    </div>
  );
};

export default App;
