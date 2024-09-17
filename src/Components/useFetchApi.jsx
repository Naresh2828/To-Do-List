import React, { useEffect, useState } from "react";
import axios from "axios";
const useFetchApi=(url)=>{
    const[data,setdata]=useState([])
    const handlefetch=async()=>{
        let res=await axios.get(url)
        setdata(res.data);

    };
    useEffect(()=>{
        handlefetch()
    },[url])
    return{data}
}
export default useFetchApi