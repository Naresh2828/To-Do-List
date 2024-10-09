import React,{createContext,useState} from "react";
export const CounterContext=createContext()
export const CounterProvider=({children})=>{
    const[count,setcount]=useState(1)
    const increment=()=>{
        setcount(count+1)
    }
    return(
        <CounterContext.Provider value={{count,increment}}>
{children}
        </CounterContext.Provider>
    )
}