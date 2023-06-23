import React from 'react';
import styles from "./HomeScreen.module.css";
import { useState ,useEffect} from 'react';
import axios from 'axios';
import Crad from './Crad';
import Carttt from './Carttt';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { login } from './ownSlice';

function HomePage() {
  const [carts ,setCarts] = useState();
  const [users,setUsers] =useState([{}]);
  const [loading,setLoading]=useState([{}]);
  const cartvalue = useSelector((state)=>state.own.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
   
  const handleClick = () => navigate('/GutenMorgen');
  const hhhh = (e)=> {
    setCarts(e.target.value);
  };
  useEffect(() => {
  
    axios
    .get("https://dummyjson.com/products")
    
      .then((response) => {setUsers(response.data);});
         console.log(users);
    
    },[]);   

    //  axios ({
    //   method:'POST',
    //   mode:"cors",
       
    //   url:"https://dummyjson.com/products",
       
    //   headers:{

    //     "Accept":"application/json",
    //     "content-Type":"application/json",
        
    //   }
    // }).then(response=>{return response.json();})
    // .then(responseData=>{console.log(responseData);
    // return responseData;})
    // .then(data =>setCart(cart + 1))

  return (
    <div>
       <div>
      <div style={{backgroundColor:"blue",display:"flex"} }> 
       

       
 
         <img src=" " href="https://www.google.com" alt ="google " style={{width:"200px",height:"50px" ,marginLeft:"50px", marginTop:"20px"}}  />
       
       


      
        <input type ="search" placeholder="search for products, brands and more " style={{width:"1650px", marginBottom:"50px",marginTop:"20px",marginRight:"25px"}} onChange={(e)=>setLoading(e.target.value !== users.description)} />
       

        <div><button style={{width:"200px", marginBottom:"50px",marginTop:"20px"}} > Login </button></div>
        
       <span style={{color:"white", marginTop:"72px",marginBottom:"0px"}}>
        Become a seller
        </span>
        <span style={{color:"white", marginTop:"25px"}}>

            More 
        </span>
        <span style={{color:"white",marginBottom:"5px"}}>
        <button onClick={handleClick}>  Cart  {cartvalue.cart}  </button>
           
        </span>
        </div>
       
       </div>

      
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

         <button onClick={()=>dispatch(login({cart:cartvalue.cart + 1}))}>

           Add to cart BUY now 
         </button>
         
          
         </div>
       </div>
       <div style={{color:"grey",textAlign:"center",backgroundColor:"white",fontSize:"45px"}}>
      
      
         </div> </div></span> <div style={{color:"Orange",backgroundColor:"navyblue",fontSize:"50px"}}>{user.description} </div>
         </div>
        
        
       </div>
       
        </li>)))}
       </p>
       <Crad 
       userss={users}


         
   

      />
      <Carttt 
      
      cart = {cartvalue.cart }
      />



      
    </div>
  )
}

export default HomePage;

