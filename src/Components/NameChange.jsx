import React, { useState } from "react";
function NameChange(){
    const[name,setname]=useState("Dhanush")
const fetch=()=>{
    if(name=="Dhanush"){
        setname("Silambarasan")
    }else{
        setname("Dhanush")
    }
    }

    return(
        <>
        <h1>Name:{name}</h1>
        <button onClick={fetch}>Change</button>
        </>
    )
}
export default NameChange;