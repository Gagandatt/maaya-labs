import React, { useState, useEffect } from 'react';
import { fabric } from 'fabric';
const App = () => {
  const [canvas, setCanvas] = useState('');
  useEffect(() => {
    setCanvas(initCanvas());
  }, []);

  const initCanvas = () => (
    new fabric.Canvas('canvas', {
      height: 800,
      width: 800,
      backgroundColor: 'pink'
    })
  );

  const addRect = canvi => {
    const rect = new fabric.Rect({
      height: 200,
      width: 100,
      fill: 'black'
    });
    canvi.add(rect);
    canvi.renderAll();

  }

  // addRect(canvas);
  return (
    <div>
      <h1>Front-end Internship task</h1>
      <div className="clicked"></div>
      <button onClick={() => addRect(canvas)}>Rectangle</button>
      <canvas id="canvas" />
    </div>
  );
}
export default App;