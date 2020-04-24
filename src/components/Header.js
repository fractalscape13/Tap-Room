import React from 'react';

function Header() {
  return (
    <div style={style}>
      <h1>Booch Palace</h1>
    </div>
  );
}

const style  = {
  display: 'flex',
  justifyContent: 'center', 
  margin: 0,
  width: '100%',
}

export default Header;