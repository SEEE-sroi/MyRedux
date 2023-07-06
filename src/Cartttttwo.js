import React from 'react';
 
import { logout } from './CartUpdateSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {useSelector} from "react-redux";
function Cartttttwo() {
    
    const dispatch = useDispatch();
    const navigate= useNavigate();
    const cartupdateCart = useSelector((state)=>state.CartUpdate.value);
    const heeloMoveBack = ()=>
      navigate("/");
      return (
        <div>
           
          <button onclick={()=> dispatch(logout(cartupdateCart.cart))} style={{color:"blue"}}>
            Total Items in Cart : {cartupdateCart.cart}    
            
          </button>
        
         <button onClick={heeloMoveBack}>
          Move Back zu StarsEIte
         </button>
        </div>
      )
    }
    export default Cartttttwo;


