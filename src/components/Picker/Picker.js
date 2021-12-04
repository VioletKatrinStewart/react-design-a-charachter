import React from 'react';
import './Picker.css';
export default function Picker({ head, middle, pants }) {
  return (
    <>
      <div className="imgs">
        {/* <img src={`${process.env.PUBLIC_URL}/head/bird-head.png`} /> */}
        <img className="characterImg" src={`${process.env.PUBLIC_URL}/head/${head}.png`} />

        {/* <img src={`${process.env.PUBLIC_URL}/middle/blue-middle.png`} /> */}
        <img className="characterImg" src={`${process.env.PUBLIC_URL}/middle/${middle}.png`} />

        {/* <img src={`${process.env.PUBLIC_URL}/leg-pants.png`} /> */}
        <img className="characterImg" src={`${process.env.PUBLIC_URL}/pants/${pants}.png`} />
      </div>
    </>
  );
}
