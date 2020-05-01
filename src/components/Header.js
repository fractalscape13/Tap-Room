import React from 'react';

function Header() {
  return (
    <div style={style}>
      <h1>Booch Palace</h1><br />
      <p>People who don't like kombucha just have no.... culture.</p>
    </div>
  );
}

const style  = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center', 
  margin: 0,
  width: '100%',
}

export default Header;