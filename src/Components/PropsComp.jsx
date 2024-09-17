import React, { useState } from "react";
function PropsComp({names} ){
    // const [dataname,setdataname]=useState(name,age)
    return(
        <>
        {/* <h1>{name}-{age}</h1> */}
        {names.map((M)=>(
            <h1>{M}</h1>
        ))}
        

        </>
    )
}
export default PropsComp