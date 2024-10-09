import React, { useEffect, useState } from "react";
import "./ToDo.css";
import axios from "axios";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
function ToDo() {
    const [products, setproducts] = useState([])
    const[input,setinput]=useState("")
    const handlefetch = async () => {
        let res = await axios.get("http://localhost:3000/todoList")
        setproducts(res.data)
    }
    useEffect(() => {
        handlefetch()
    }, [])
    const handleinput = (e) => {
        setinput(e.target.value);
        
    }
    const handlepost=()=>{
        let body={
            products:input,
        }
        let post=axios.post("http://localhost:3000/todoList",body)
        alert("success")
        handlefetch()

    }
    const handledelete=async(id)=>{
        let del=await axios.delete(`http://localhost:3000/todoList/${id}`)
        handlefetch()
    }
    const handleedit=async(a)=>{
        let rs=prompt("Enter your Text",products[a].products)
        let body={
            id:products[a].id,
            products:rs,
        }
        let upd=await axios.put(`http://localhost:3000/todoList/${products[a].id}`,body)
        handlefetch()

    }
    return (
        <body>
                
                <div id="itemlist">
                
            <h1>Grocery List</h1>
            
            <input onChange={handleinput} placeholder="Enter your Products" />
            
            <button onClick={handlepost}>Submit</button>
            
            {products.map((yu,i) => (
                <div key={i}>
                <div className="pr">    
                <span>{i+1}.{yu.products}</span>
                
                <span onClick={()=>handleedit(i)} ><FaEdit/></span>
                <span onClick={()=>handledelete(yu.id)}><MdDelete/></span>
                </div>
                </div>
                
                
            ))}
            </div> 
            </body>
    )


    
    
}
export default ToDo