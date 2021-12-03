import React from 'react';
import './Character.css';
export default function CharacterOptions({ head, setHead, middle, setMiddle, pants, setPants }) {
  const handleHead = (e) => {
    setHead(e.target.value);
  };
  const handleMiddle = (e) => {
    setMiddle(e.target.value);
  };
  const handlePants = (e) => {
    setPants(e.target.value);
  };
  return (
    <div>
      <div>
        <label>
          Head
          <select value={head} onChange={handleHead}>
            <option value="dog-head">Dog</option>
            <option value="bird-head">Bird</option>
            <option value="duck-head">Duck</option>
            <option value="horse-head">Horse</option>
          </select>
        </label>
        <label>
          Shirt
          <select value={middle} onChange={handleMiddle}>
            <option value="red-middle">Red Shirt</option>
            <option value="pink-middle">Pink Shirt</option>
            <option value="blue-middle">Blue Shirt</option>
            <option value="dress-middle">Dress</option>
          </select>
        </label>
        <label>
          Pants
          <select value={pants} onChange={handlePants}>
            <option value="leg-pants">Leg</option>
            <option value="white-pants">White Pants </option>
            <option value="dog-pants">Dog Pants</option>
            <option value="white-pants">White Pants</option>
          </select>
        </label>
        <label>
          Give your character a catch-phrase
          <button>Add</button>
        </label>
      </div>
    </div>
  );
}
