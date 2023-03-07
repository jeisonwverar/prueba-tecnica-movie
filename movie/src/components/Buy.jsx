import dbProduct from "../db/product.json";
import  {useState,useEffect } from "react";
const Buy=()=>{
       let[counter,setCount]=useState(1);


    return(
        <div>
            {
                dbProduct.data.map((el)=>{
                    return(<>
                    <h2>{el.name}</h2>
                    <h3>{el.brand}</h3>
                    <p>{el.ref}</p>
                    <p>{el.price}</p>
                    </>
                    )

                })
            }
            <button>s</button>
            <button>m</button>
            <button>l</button>
            <button>xl</button>
            <a href="">Guia de tallas</a>
            <button onClick={()=>setCount(counter===1?1:counter-1)}>-</button>
                <span>{counter}</span>
            <button onClick={()=>setCount(counter+1)}>+</button>
            <button>agregar mi bolsa</button>


        </div>
    )
}

export default Buy;