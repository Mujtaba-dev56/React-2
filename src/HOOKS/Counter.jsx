import "./Count.css"
 import { useState } from "react";
const Counter=()=>{
    
    const [count,setcount] = useState(0);
    
return ( 

<div id="contaner"> 

<p id="para"> You have clicked {count} times</p>
<button id="btn" onClick={()=>{ setcount(count+2)}}> Click me</button>


</div>


 )


}

export default Counter;