import React from "react";
import Sayma from "./Sayac1.js";
import { useState } from "react";
function App() {

  const [count,degis]=useState(0)

  const degistir= (event) =>{
    degis(event.target.value)
  }
  return (
      <div>
        <input type="number" id="input" value={count} onChange={degistir} />
        <Sayma sayac1={count}  />    
      </div>
    
  );
}

export default App;

