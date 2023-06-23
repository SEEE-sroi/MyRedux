import React, { useState } from 'react';

function Data() {

  const [mydatan ,setMydatan]= useState();
  const [cart ,setCart] = useState(1);

  return (
    <div>
       <button onClick={()=>setCart(cart + 1)} >
             Cart 
       </button>
         
    </div>
  )
}

export default Data;
