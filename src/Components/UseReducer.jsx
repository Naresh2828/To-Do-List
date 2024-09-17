import React, { useReducer, useState } from "react";
function arith(state,action){
    if(action.type=="increment"){
        return{count:state.count+1};
}  if(action.type=="decrement"){
       return{count:state.count- 1};
}if(action.type=="reset"){
    return{count:0};

}
}
function UseReducer(){
    // const[count,setcount]=useState(0);

    // const handleadd=()=>{
    //     try{
    //         setcount(count+1);
    //     }catch(err){
    //         console.log(err);
            
    //     }

    // }
    const[state,dispatch]=useReducer(arith,{count:0})
    const handleadd=()=>{
        dispatch({type:"increment"})
    }
    const handlesub=()=>{
        dispatch({type:"decrement"})
    }
    const handlereset=()=>{
        dispatch({type:"reset"})
    }

    return(
        <>
        <h1>Count- {state.count}</h1>
        <button onClick={handleadd}>Add</button>
        <button onClick={handlesub}>Sub</button>
        <button onClick={handlereset}>Reset</button>
        </>
    )
}export default UseReducer