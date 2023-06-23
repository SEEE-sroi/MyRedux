import React from 'react';
import styles from "./HomeScreen.module.css"; 
function HomeScreen() {

  const myStyle= {
            color:"yellow",                               // object and inserting some code css in side es
            backgroundColo:"navyblue",
    };
  return (
    <div>
      <div>
      <div style={{color:"red", backgroundColor:"white", textAlign:"center",fontSize:"40px",fontFamily:"sans-serif"}}>  

          <a href='https://www.naukri.com/mnjuser/homepage'> Click on it </a>                                                           
      </div>
      
      </div>
      <div style={{backgroundColor:"white" , textAlign:"center",fontSize:"25px", paddingLeft:"0px"}}>             
      <span>
     
     
        </span>

       <span>
       
       </span>
      <span>
    
      </span>

      </div>
      <div className={styles.Pavan}>




      </div>

      <div>
          
        <span>
  
         

            
        </span>
      
      </div>

    </div>
  )
}

export default HomeScreen;
