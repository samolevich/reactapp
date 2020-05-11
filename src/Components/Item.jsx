import React from 'react'

export default props => {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h3>Number: {props.number}</h3>
      <button onClick={() => props.changeTitle(props.name)}>Click</button>
    </div>
  )
}
