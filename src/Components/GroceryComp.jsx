import React, { useEffect,useState } from "react";
import axios from "axios";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
function GroceryComp(){

const[grocerydata,setgrocerydata]= useState([])
const[input,setinput]=useState(" ");

const handlefetch=async()=>{
    let res=await axios.get("http://localhost:3000/todoList");
     setgrocerydata(res.data);
}
useEffect(()=>{
    handlefetch();
},[])

const handleinput=(e)=>{
    setinput(e.target.value);

}
const handlepost=()=>{
    let body={
        grocery:input,
    }
    let post=axios.post("http://localhost:3000/todoList",body);
    alert("success");
    handlefetch()
    
}



    return(
        <>
        <h1>Grocery Store</h1>
        <input onChange={handleinput} placeholder="Enter your grocery product"/>
        <button onClick={handlepost} >Submit</button>
        {grocerydata.map((da,i)=>(
            <div>
                <h2>{i+1}. {da.grocery}</h2>
                <span><FaEdit/> </span>
                <span><MdDelete/></span>

            </div>
        ))}
        </>
    )
}
export default GroceryComp