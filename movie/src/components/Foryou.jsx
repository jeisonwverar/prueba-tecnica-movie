import CardSecond from "./CardSecond";
import dbFor from "../db/for.json";

const Foryou =()=>{
    const Data= dbFor.products;



    return(
        <div className="interesting__container">
        <CardSecond data={Data}/>
        
        
        </div>
    )

}


export default Foryou;