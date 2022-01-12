import React from 'react';
import './App.css';
import sketch from './sketch';
import p5 from 'p5';

import Header from './components/Header';
import Cake from './components/Cake';
import Gifts from './components/Gifts';

const TEXT = 'Happy Birthday Dad';

const App = () => {
  const canvasRef = React.useRef(null)

  React.useEffect(() => {
    const canvasDivElement = canvasRef.current;

    // NOTE: If you change TEXT value to something else, you'll need to make changes in sketch.js as well to make it work
    // See my comments in sketch.js
    new p5(sketch(canvasDivElement, TEXT), canvasDivElement);
  })

  return (
    <>
    <div className="main">
      <div ref={canvasRef} />
    </div >
//       <Cake />
      <Header />
//       <Gifts />
  </>
  )
}

export default App;
