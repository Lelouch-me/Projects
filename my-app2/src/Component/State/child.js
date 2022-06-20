import React from 'react'

const child = (props) => {
  const dataa = "sakjuhfmbtgiukjiur"

  props.onData(dataa)
  return (
    <div>
      <p> props.date  </p>
    </div>
  )
}

export default child
