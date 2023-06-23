import React from 'react';
import { useState } from 'react';
import { login } from './ownSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {useSelector} from "react-redux"
function Carttt() {
  const [cart ,setCart] =useState(0);
  const dispatch = useDispatch();
  const navigate= useNavigate();
  const cartvalue = useSelector((state)=>state.own.value);
  const heeloMoveBack = ()=>
    navigate("/");

  return (
    <div>
       
      <button onclick={()=> dispatch(login(cartvalue.cart))} style={{color:"blue"}}>
        Total Items in Cart : {cartvalue.cart}    
        
      </button>
    <div><button onClick={()=>dispatch(login({cart:cartvalue.cart + 1}))}>
        Increase Cart
      </button>
</div>
      
     <button onClick={()=>dispatch(login({cart:cartvalue.cart - 1}))}>


        Decrease Cart 
     </button>

     <button onClick={()=>dispatch(login({cart:cartvalue.cart *0}))}>
     Reset 

     </button>
  
      <button onclick={()=> setCart(cart + 1)} style={{color:"blue"}}>
        Total Items in Cart : {cart}    
        
      </button>
    <div><button onClick ={()=>setCart(cart+1)}>
        Increase Cart
      </button>
</div>
      
     <button onClick={()=>setCart(cart - 1)}>


        Decrease Cart 
     </button>

     <button onClick={()=>setCart(cart * 0)}>
     Reset 

     </button>
     <button onClick={heeloMoveBack}>
      Move Back zu StarsEIte
     </button>
    </div>
  )
}

export default Carttt;
