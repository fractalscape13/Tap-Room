import React from 'react';

function Footer(){
  return (
    <div style={style}>
      <p>People who don't like kombucha just have no.... culture.</p>
    </div>
  );
}

const style  = {
  position: 'fixed',
  left: 0,
  bottom: 0,
  // backgroundColor: 'indigo',
  // color: 'ivory',
  width: '100%',
  display: 'fixed',
  borderTop: '5px solid black',
  textAlign: 'center'
}

export default Footer;