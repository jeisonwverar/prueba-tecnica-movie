import CardSecond from './CardSecond';
import dbInteresting from '../db/interesting.json'
const Interesting=()=>{

    const Data= dbInteresting.products;



    return(
        <div className="interesting__container">
        <CardSecond data={Data}/>
        
        
        </div>
    )
}

export default Interesting;