import React, { useState } from "react";
function ApiCall() {

    const[apidata,setapidata]=useState([])

    const handlefetch = async () => {
try{
        let res = await fetch("https://fakestoreapi.com/products")
        let data = await res.json()
        console.log(data);
        setapidata(data)
}catch(err){
    console.log(err);
    
}finally{
    console.log("finally");
    
}
    }

    return (
        <div>
            <h1> Api Call</h1>
            <button onClick={handlefetch}>click</button>
            {apidata.map((da)=>(
                <div key={da.id} >
                <h1>{da.title}</h1>
                <h2>{da.price}</h2>
                <img src={da.image}/>
                </div>
            ))}

        </div>

    )
}
export default ApiCall