import React from 'react';

function Picker() {
  return (
    <>
      <div>
        <img src={`${process.env.PUBLIC_URL}/bird-head.png`} />
      </div>
      <div>
        <img src={`${process.env.PUBLIC_URL}/blue-middle.png`} />
      </div>
      <div>
        <img src={`${process.env.PUBLIC_URL}/leg-pants.png`} />
      </div>
    </>
  );
}

export default Picker;
