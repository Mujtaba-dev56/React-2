import React from 'react'
// import  {useState} from 'react';
 
const Liftingup=(props)=>{
    return ( <div>

<input type="text" onChange={(e)=>props.setname(e.target.value)}/>

<p>its insde child and value is : {props.name}</p>


    </div>


    )
}

export default Liftingup;
