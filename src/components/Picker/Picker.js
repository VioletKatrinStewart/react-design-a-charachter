import React from 'react'

export default function Picker() {
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
  )
}
