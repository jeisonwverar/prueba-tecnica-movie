import Slider from "./Slider";
import dbProduct from "../db/product.json"
const Galery=()=>{

    let  galeryProduct= dbProduct.image.map((el)=>el.image)

    return(
        
        <div className="galery__container">
           <Slider imagenes={galeryProduct}/>
        </div>
    )
}


export default Galery;