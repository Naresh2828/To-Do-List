import React, { useState } from "react"
// import "./App.css"
import ScamPeople from "./Components/ScamPeople"
import ViratKohli from "./Components/ViratKohli"
import StateCount from "./Components/StateCount"
import HookState from "./Components/HookState"
import NameChange from "./Components/NameChange"
import ListRender from "./Components/ListRender"
import ApiCall from "./Components/ApiCall"
import UseEffect from "./Components/UseEffect"
import PropsComp from "./Components/PropsComp"
import InputComp from "./Components/InputComp"
import ReactProject from "./Components/ReactProject"
import HomeComp from "./Components/Pages/HomeComp"
import ProductsComp from "./Components/Pages/ProductsComp"
import AboutComp from "./Components/Pages/AboutComp"
import { BrowserRouter,Routes,Route ,Link} from "react-router-dom"
import GroceryComp from "./Components/GroceryComp"
import NareshDiwakar from "./Components/NareshDiwakar"
import ComPlete from "./Components/ComPlete"
import UseReducer from "./Components/UseReducer"
import ApiEffect from "./Components/ApiEffect"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import 'bootstrap/dist/js/bootstrap'; 
import CartCount from "./Components/CartCount"
import ProductCart from "./Components/ProductCart"
import { CounterProvider } from "./Components/Context/CounterContext"
import ToDo from "./Components/ToDo"


function App() {
  // const [islog, setislog] = useState(false)
  // const handlelogout = () => {
  //   setislog(true)
  // }


  return (
    <>
{/* <div className="padding">
<Link to="/">Home</Link>
</div>
<div className="padd">
<Link to="/products">Products</Link>
</div>
<div className="pad">
<Link to="/about">About</Link>
</div> */}
      
      {/* <ScamPeople/>
    <ViratKohli/> */}
    {/* <GroceryComp/> */}
  
    {/* <ToDo/> */}
    {/* <NareshDiwakar/> */}
    {/* <CounterProvider>
    <CartCount/>
    <ProductCart/>
    </CounterProvider> */}
    {/* <ComPlete/> */}
    {/* <InputComp/> */}
    {/* <ReactProject/> */}
    {/* <Routes>  */}
     {/* <HomeComp/>
    <ProductsComp/>
    <AboutComp/> */} 
     {/* <Route path="/" element={<HomeComp/>}/> */}
    {/* <Route path="/products" element={<ProductsComp/>}/> */}
    {/* <Route path="/about" element={<AboutComp/>}/> */}

    {/* </Routes>  */}
   

      {/* <HookState/> */}
      {/* <NameChange/> */}
      {/* <ListRender/> */}
      {/* <ApiCall/> */}
      {/* <UseReducer/> */}
      <ApiEffect/>
      {/* <PropsComp name={"Naresh"}age={20}/> */}
      {/* <PropsComp names={["Naresh","Diwakar","Sherif"]}/> */}
      {/* {islog ? null : <UseEffect />} */}
      
      {/* <br></br> */}
      {/* <br></br> */}

      {/* <button onClick={handlelogout}>LOGOUT</button> */}
    </>
  )
}
export default App
