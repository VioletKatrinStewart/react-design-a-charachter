import React from 'react';
export default function Picker({ head, middle, pants }) {
  return (
    <>
      <div>
        <img src={`${process.env.PUBLIC_URL}/head/bird-head.png`} />
        <img src={`${process.env.PUBLIC_URL}/head/${head}.png`} />
      </div>
      <div>
        <img src={`${process.env.PUBLIC_URL}/middle/blue-middle.png`} />
        <img src={`${process.env.PUBLIC_URL}/middle/${middle}.png`} />
      </div>
      <div>
        <img src={`${process.env.PUBLIC_URL}/leg-pants.png`} />
        <img src={`${process.env.PUBLIC_URL}/pants/${pants}.png`} />
      </div>
    </>
  );
}
