import React, {useState } from "react";
import { createContext } from "react";
export let CounterContext =createContext()
export function Countercontext2 (props){
    let [counter,setcounter]=useState(0)
    
       let increase=()=>{
       setcounter(counter +1)

       }
       let decrease=()=>{
       setcounter(counter -1)
       }
       let countervalue={counter:counter,increase:increase,decrease:decrease}
 return (
    <CounterContext.Provider value={countervalue}>
      {props.children}
    </CounterContext.Provider>
            
            
        );
    
}