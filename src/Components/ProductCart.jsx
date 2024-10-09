import React, { useContext } from "react";
import { CounterContext } from "./Context/CounterContext";
function ProductCart(){
    const{increment}=useContext(CounterContext)
    return(
        <>
        <h1> Cricket Pad</h1>
        <button onClick={increment}>Add to Cart</button>
        </>
    )
}
export default ProductCart