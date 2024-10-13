const Maping = ()=>{
  const item=[
    {id:1 ,name : 'iphone', model :2024},
    {id:2 ,name :' Android', model :2023},
    {id:3 ,name : 'linux' ,model :2022},
    {id:4 ,name : 'none', model :2021}
    
  ]
return ( <>
 
{item.map((data)=> <div>key={data.id}
  <h4> title={data.name}</h4>
  <h4> model={data.model}</h4>
</div> )}
</>


)
}
export default Maping;