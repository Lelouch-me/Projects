import React from 'react'
import { useState , useEffect } from 'react'

const useE = () => {
    const [count, setCount] = useState(0)
    const [counts, setloadings] = useState(false)

    const handleOn = () => {
        setCount (count => count+1)
    }
    useEffect(()=> {
        console.log('sadsad');
    } , [count])
  return (
    <div>
        {console.log('saasfafdg')}
      <h1>Count: {count}</h1>
      <button onClick={handleOn}>+</button>
      <button onClick={()=>{setloadings(!counts)}}>--</button>
    </div>
    
  )
}

export default useE
