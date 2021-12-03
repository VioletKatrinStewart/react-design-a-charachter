import React from 'react'

export default function Character() {
  return (
    <>
      <div>
        <label>
          Head
          <select>
            <option value="bird-head">Bird</option>
            <option value="duck-head">Duck</option>
            <option value="horse-head">Horse</option>
          </select>
        </label>
        <label>
          Shirt
          <select>
            <option value="red-middle">Red Shirt</option>
            <option value="pink-middle">Pink Shirt</option>
            <option value="blue-middle">Blue Shirt</option>
            <option value="dress-middle">Dress</option>
          </select>
        </label>
        <label>
          Pants
          <select>
            <option value="leg-pants">Leg</option>
            <option value="white-pants">White Pants </option>
            <option value="dog-pants">Dog Pants</option>
            <option value="white-pants">White Pants</option>
          </select>
        </label>
        <label>
          Give your character a catch-phrase
          <input />
          <button>Add</button>
        </label>
      </div>
    </>
  )
}
