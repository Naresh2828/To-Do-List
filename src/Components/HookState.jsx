import React, { useState } from "react";
function HookState(){
    // state is use to store components, its is immutable 
    // hook is the inbuilt function of react js, start with use keyword
    const[count,setcount]=useState(0)
    const fetch=()=>{
        setcount(count+1)
    }


    return(
        <>
        <h1>movie name:chotta bheem curse of the king</h1>
        <h2>ticket count-{count}</h2>
        <button onClick={fetch}>add ticket</button>
        </>
    )
}
export default HookState;