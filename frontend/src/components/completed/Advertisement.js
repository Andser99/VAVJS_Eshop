import React, { useState } from 'react';

async function adClick(e, counter, setCounter) {
  const res = await fetch('http://localhost:3001/adclick');
  if (res.status === 200) {
    setCounter(counter + 1);
  }
}

async function Advertisement() {
  const [counter, setCounter] = useState(0);
  const ad = await fetch('http://localhost:3001/ad');
  setCounter(ad.json.clicks);
  return (
    <div>
      <a href={ad.json.url} onclick={(e) => {adClick(e, counter, setCounter)}}>Click this ad!</a>
      <img src={ad.json.image} alt=""></img>
      <p>{counter}</p>
    </div>
  )
}


export default Advertisement