import {Routes ,Route} from "react-router-dom";
import Fetching from "./Fetching";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import Data from "./Data";
import Crad from "./Crad";


import { Provider } from "react-redux";

import Carttt from "./Carttt";
import Bilder from "./Bilder";
import Cartttttwo from "./Cartttttwo";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="*" element= {<HomePage />} />

       <Route path= "/saa" element ={<Fetching />} />
       
        <Route path ="/GutenMorgen" element ={<Carttt />} />
        <Route path ="/AAAA" element ={<Bilder />} />
        <Route path ="/GutenAbend" element={<Cartttttwo />} />
      </Routes>
      </BrowserRouter> 
     
    </div>
  );
}

export default App;
