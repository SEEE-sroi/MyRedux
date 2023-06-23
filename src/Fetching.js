import { useState,useEffect 
} from "react";

import axios from "axios";
function Fetching(){
 
    const [users,setUsers] =useState({});
   
  useEffect(() => {
  
    axios
    .get("https://dummyjson.com/products")
    // .get("http://localhost:3000/products")
      .then((response) => {setUsers(response.data);});
         console.log(users);
    
    },[]);   

  return (
      <div>

     
      <p>
       
        
        {users && users.products && users.products.map((user=>(<li key={user.id}><div>
        <div style={{color:"blue",textAlign:"center",backgroundColor:"yellow",fontSize:"25px"}}>

        Brand: {user.brand}
        </div>
        
          
          

          <div style={{color:"blue",textAlign:"right",backgroundColor:"red",fontSize:"45px"}}>
        Mobile Name:  {user.title}

          </div>
         <div>
         <span style={{justifyContent:"flex"}}>
          <div>
          <div style={{justifyContent:"grid"}}>
          <div style={{display:"inline-flex"}}>
          <img src ={user.thumbnail} alt={user.title} style={{width:"400px",height:"500px", marginRight:"20px"}}/>  
        
          <span style={{marginLeft:"50px",color:"orange",fontFamily:"monospace",fontSize:"20px",paddingTop:"200px"}} > <div> Product Name:  {user.title} </div> <div style={{marginTop:"0px"}}> Discount Percentage: {user.discountPercentage}</div> <div style={{color:"red"}}> Description of the product :  {user.description} </div><div> Discount Percentage:  {user.discountPercentage} </div> <div> Product Price :  {user.price}</div> <div> Product Rating:  {user.rating} </div> <div> Product's Left In the Stock :  {user.stock} </div></span>
          
           
          </div>
        </div>
        <div style={{color:"grey",textAlign:"center",backgroundColor:"white",fontSize:"45px"}}>
       
       
          </div> </div></span> <div style={{color:"Orange",backgroundColor:"navyblue",fontSize:"50px"}}>{user.description} </div>
          </div>
         
         
        </div>
        
         </li>)))}
        </p>
      </div>
  )
}
export default Fetching;