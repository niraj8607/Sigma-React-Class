import "./Counter.css"
import { useState } from "react";
export default function Counter(){
    let[count, setCount] = useState(0); //intialization
    
    function incCount(){
        setCount(count+1);
    }

    return(
      <div>
        <h3>Count = {count}</h3>
        <button onClick={incCount} className="btn">Increase Count</button>
      </div>
    );
}