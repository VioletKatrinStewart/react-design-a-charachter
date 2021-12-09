import React from 'react';
import './Character.css';
export default function CharacterOptions({
  head,
  setHead,
  setHeadCount,
  middle,
  setMiddle,
  setMiddleCount,
  pants,
  setPants,
  setPantsCount,
  catchPhrase,
  setCatchPhrase,
  setCatchPhraseList,
}) {
  const handleHead = (e) => {
    setHead(e.target.value);
    setHeadCount((prevState) => prevState + 1);
  };
  const handleMiddle = (e) => {
    setMiddle(e.target.value);
    setMiddleCount((prevState) => prevState + 1);
  };
  const handlePants = (e) => {
    setPants(e.target.value);
    setPantsCount((prevState) => prevState + 1);
  };
  const handleCatchPhrase = () => {
    setCatchPhraseList((prevState) => [...prevState, catchPhrase]);
    setCatchPhrase('');
  };
  return (
    <div>
      <div className="div1">
        <label className="head">
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
            <option value="blue-pants">Blue Pants </option>
            <option value="dog-pants">Dog Pants</option>
            <option value="white-pants">White Pants</option>
          </select>
        </label>
        <label>
          What`s your catch phrase?
          <input
            className="catchphrase"
            type="text"
            value={catchPhrase}
            onChange={(e) => setCatchPhrase(e.target.value)}
          />
          <button onClick={handleCatchPhrase}>Add</button>
        </label>
      </div>
    </div>
  );
}
