import React, { useState } from 'react'

export default function Hookss2() {

    const [count, setCount] = useState(0)

    const onClick = () => {
        setCount(count +1)
    }

  return (
    <div>
        <h1>Count: {count}</h1>
      <button onClick={onClick} >incriment</button>
    </div>
  )
}
