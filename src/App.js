import {Routes ,Route} from "react-router-dom";
import Fetching from "./Fetching";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import Data from "./Data";
import Crad from "./Crad";


import { Provider } from "react-redux";

import Carttt from "./Carttt";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="*" element= {<HomePage />} />

       <Route path= "/saa" element ={<Fetching />} />
       
        <Route path ="/GutenMorgen" element ={<Carttt />} />

      </Routes>
      </BrowserRouter> 
     
    </div>
  );
}

export default App;
