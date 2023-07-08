import React from 'react'

function Cartt({users,loading}) {
    console.log(users);
      return (
    <div>
       
       
        
       {users && users.products && users.products.map((user=>(<li key={user.id}>
       <div style={{color:"blue",textAlign:"center",backgroundColor:"yellow",fontSize:"25px"}}>

       Brand: {user.brand}
       </div>
       
         
         

         <div style={{color:"blue",textAlign:"right",backgroundColor:"red",fontSize:"45px"}}>
       Mobile Name:  {user.title}
     </div>
     </li>)))}
     <ol>
        {loading && loading.products && loading.products.map((user=>(<li key = {user.id}> {user.brand} </li>)))}
     </ol>
     </div>
    
  )
}

export default Cartt;
