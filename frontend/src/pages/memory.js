import React, { useState, useRef, useEffect } from "react"

export function MemoryVault() {
  const [dimension, setDimensions] = useState([])
  let myWindow = useRef(null)
  let myCanvas = useRef(null)
  const [starcoord, setCoords] = useState([])
  const [constellation, setConstellation] = useState([])

  useEffect(() => {
    setDimensions([window.getComputedStyle(myWindow.current).width.slice(0, 3), window.getComputedStyle(myWindow.current).height.slice(0, 3)]);
  }, []);
  useEffect(() => {
    if (starcoord.length > 1) {
      let startP = Math.floor(Math.random() * (starcoord.length - 1));
      console.log(startP);
      for (let i = startP; i < Math.min(startP + 3, starcoord.length - 1); i++) {
        console.log("DRAWING");

        let points = `${starcoord.at(-1)[0] + 10},${starcoord.at(-1)[1] + 10} ${starcoord[i][0] + 10},${starcoord[i][1] + 10}`;
        setConstellation(constellation => [...constellation, points])
        console.log(`prev: ${i}`, points);

      }
    }
  }, [starcoord])
  function showStar() {
    let width = Math.round(20 + Math.random() * (dimension[0] - 40));
    let height = Math.round(80 + Math.random() * (dimension[1] - 120));
    console.log(dimension);

    setCoords(coords => [...coords, [width + 10, height + 10]]);

  }
  return (
    <div ref={myWindow} style={{ color: 'white', height: '100svh', width: '100svw', backgroundColor: '#202020' }}>
      <svg ref={myCanvas} xmlns="http://www.w3.org/2000/svg">{constellation.length && constellation.map((point, index) => {
        return (
          <polyline key={index} points={point} xmlns="http://www.w3.org/2000/svg"></polyline>
        )
      })}</svg>

      {starcoord.map((star, index) => {
        return (
          <div key={index} className="starDiv" style={{ top: `${star[1]}px`, left: `${star[0]}px` }}>
            <div className="star"></div>
          </div>
        )
      })}
      <button className="primary" style={{ position: 'absolute', zIndex: 2 }} onClick={showStar}>click</button>
    </div>
  )
}
