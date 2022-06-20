import React, {useState} from 'react'

const Toggle = () => {
    const[toggle,setToggle] = useState(true)
  return (
    <div style={{margin:"1rem", backgroundColor:"pink", padding:"1rem"}}>
      {
        toggle &&(
            <p > ldsfsdaf sdf sdaf sdf sdf safdsd
        f sdaf sdfsdf 
        sdf sdfasd   </p>
        )
      }

        <div style={{textAlign:"center"}}>
        <button onClick={() => {setToggle(!toggle)}}>{toggle? "hide" : "show"}</button> 
        </div>
    </div>
  )
}

export default Toggle
