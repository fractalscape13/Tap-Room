import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TapRoomControl from './components/TapRoomControl';

function App() {
  return (
    <React.Fragment>
      <Header />
      <hr />
      <TapRoomControl />
      <hr />
      <Footer />
    </React.Fragment>
  );
}

export default App;
