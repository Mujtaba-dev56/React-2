import React from "react"
// import { useState } from "react";
const Btn=(props)=>{ 
    return (
      <div>
        <button onClick={props.func}>
            {props.text}
            </button>
      </div>
    )
  }


export default Btn;
