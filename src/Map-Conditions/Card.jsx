
const NewApp=()=>{
    const name =" OPENHEIMER"
    const rating ="4"
    let age= 17;
    const para= <p>  pLorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur
        alias laudantium, iste earum quis quisquam quasi perspiciatis esse commodi.
         Hic
       sed iusto tempora at</p>
    return (  <div> 
  
      <h1> <center>CARD</center></h1>
      <img src="cycle.jpg" alt="cycle.jpg" height="30%"  width="30%" />
   
      <h3>Name :{name}</h3>
  
       <p> {para}  </p>
     
      <button> {age>=18 ? "Watch" :"Not Available"}</button>
  
       <h5> Ratings :{rating}</h5>
       
     </div> 
      )
  }

  export default NewApp;