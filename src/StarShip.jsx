import React from 'react'

function StarShip(name) {

  console.log('name', name)
  const style = {
    color: 'whitesmoke',
    border: '1px whitesmoke solid',
    background: 'darkgray',
    display: 'inline-block',
    width: '150px',
    height: '150px'
  }
  return (
    <div style={{display:'inline', background: 'gray', width: '100%', justifyContent: 'center'}}>
    <p style={style}>{name.name}</p>
  </div>
  )
}

export default StarShip
