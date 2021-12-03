import React, { useState } from 'react';
import Character from '../Character/Character';
import Picker from '../Picker/Picker';
import './Home.css';

export default function Home() {
  const [head, setHead] = useState('bird-head');
  const [middle, setMiddle] = useState('dress-middle');
  const [pants, setPants] = useState('blue-pants');
  return (
    <div>
      <Character {...{ head, setHead, middle, setMiddle, pants, setPants }} />
      <Picker {...{ head, middle, pants }} />
    </div>
  );
}
