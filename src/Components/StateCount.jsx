import React, { useState } from "react";

function StateCount(){



const[name,setname]=useState("abu")


const handle = () => {
    if(name=="abu")
    {
        setname("rahman")
    }
    else{
        setname("abu")
    }
}

    return(
        <>
         <h1> Name:{name}</h1>
         <button onClick={handle}> change</button>
        </>
    )
}
export default StateCount