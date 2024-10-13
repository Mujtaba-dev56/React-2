import React from 'react'
import { useState } from 'react';

function Usestate() {

    const [num,setnum]= useState(0)

    const incr=()=>{
        setnum(num+1)
    }
    const decr=()=>{
        setnum(num-1)
    }
  return (
    <div>
        <h1>{num}</h1>
<button onClick={incr}>increase by 1</button>
<button onClick={decr}>decrease by 1</button>

    </div>
  )
}

export default Usestate;