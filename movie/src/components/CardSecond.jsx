import Slider from "./Slider";
const CardSecond=(db)=>{

    if(db.length ===0){
        return;
    }

    console.log(db)

    return(
        <>
        {
            db.data.map((el,index)=>{
                
                return(
                      <div className="card__container" key={index}>

                       
                            <Slider imagenes={el.image}/>
                            <h3 className="card__container-brand">{el.brand}</h3>
                            <p className="card__container-name">{el.name}</p>
                            <p className="card__container-price">{el.price}</p>
                            <button className="card__container-btn">VER PRODUCTO</button>

                </div>
                        
                  )
                        

                })
            }
            </>
    )
}

export default CardSecond;