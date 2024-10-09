import React, { useContext } from "react";
import { CounterContext } from "./Context/CounterContext";
function CartCount(){
    const{count}=useContext(CounterContext)
    return(
        <>
        <h1>CartCount-{count}</h1>
        </>
    )
}
export default CartCount