import React from 'react'
import Header from './Component/layout/Header';
import Footer from './Component/layout/Footer';
import Homepage from './Component/pages/Homepage';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Homepage/>
      {/* <Footer/> */}
    </React.Fragment>
  );
}

export default App;
