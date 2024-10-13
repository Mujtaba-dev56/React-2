import React from 'react'

function Events() {
    const Hndl= ()=>{
        alert("you clicked it");
    };

    // events on parameter func
    const btn=(a)=>{
        alert(a+100);
    };
  return (
    <div>
        <h2> Event handling</h2>
        <button onMouseOver={Hndl}>click button</button>



 {/* use call back func in parametrize func to add any event */}
        <button onClick={()=>btn(100)}>Adding</button>
        
    </div>
  )
}

export default Events;