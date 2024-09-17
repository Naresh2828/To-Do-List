import React from "react";
import useFetchApi from "./useFetchApi";
function ApiEffect(){
    const{data}=useFetchApi("https://fakestoreapi.com/products")
    return(
        <div>
        {console.log(data)};
        
        <h1>Api Call Effect</h1>
        <div className="row">
        {data.map((na)=>(
           <div class="card col-4" style={{width: "18rem"}}>
           <img src={na.image} class="card-img-top" alt="..."/>
           <div class="card-body">
             <h5 class="card-title">{na.title}--{na.price}</h5>
             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <a href="#" class="btn btn-primary">Go somewhere</a>
           </div>
         </div>
         
           
            
           
        ))}
        {/* <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        THALA AJITH
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>VIDAMUYARCHI UPDATED</strong> 
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        EMILIA CLARKE
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>MOTHER OF THE DRAGON</strong> 
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        HOMLANDER
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>HUMANITY GOD</strong> 
      </div>
    </div>
  </div>
</div> */}

        </div>
        </div>
    )
}
export default ApiEffect