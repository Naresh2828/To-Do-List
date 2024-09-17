import React, { useEffect, useState } from "react";
function UseEffect(){

    const[count,setcount]=useState(0)
    const handlecount=()=>{
        setcount(count+1)
    }

useEffect(()=>{
    console.log("naresh");
    return()=>{
        console.log("loged out");
        
    }
    
},[count])

    return(
        <>
        <h1>Naresh--{count}</h1>
        <button onClick={handlecount}>ADD</button>
        </>
    )
}
export default UseEffect