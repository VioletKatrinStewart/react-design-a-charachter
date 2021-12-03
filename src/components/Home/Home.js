import React, { useState } from 'react';
import Character from '../Character/Character';
import Picker from '../Picker/Picker';
import './Home.css';

export default function Home() {
  const [head, setHead] = useState('bird-head');
  const [middle, setMiddle] = useState('dress-middle');
  const [pants, setPants] = useState('blue-pants');

  const [headCount, setHeadCount] = useState(0);
  const [middleCount, setMiddleCount] = useState(0);
  const [pantsCount, setPantsCount] = useState(0);

  return (
    <div>
      <Character {...{ head, setHead, middle, setMiddle, pants, setPants }} />
      <Character
        {...{
          head,
          middle,
          pants,
          setHead,
          setMiddle,
          setPants,
          setHeadCount,
          setMiddleCount,
          setPantsCount,
        }}
      />
      <Picker {...{ head, middle, pants }} />
      {!!headCount && <p>You changed the head {headCount} times.</p>}
      {!!middleCount && <p>You changed the shirt {middleCount} times.</p>}
      {!!pantsCount && <p>You changed bottoms {pantsCount} times.</p>}
    </div>
  );
}
