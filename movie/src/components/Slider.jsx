import { useState } from "react";

const Slider=({imagenes})=>{
    //variables y estados
    const [imagenActual, setimagenActual] = useState(0)

    const cantidad= imagenes?.length;
    //prevenir si nop tiene imagenes
    if(!Array.isArray(imagenes)|| cantidad === 0){
        return;
    }

    const siguienteImagen=()=>{
        setimagenActual(imagenActual===cantidad-1?0:imagenActual+1)
    }
    const anteriorImagen=()=>{
        setimagenActual(imagenActual===cantidad-1?0:imagenActual-1)
    }


    return(
        <div className="carrucel-main">
            <button onClick={anteriorImagen} className="carrucel-main-btn-l">←</button>
            {imagenes.map((img,index)=>{
                return(
                    //se valdia la imagen actual
                <div className={imagenActual===index?'slide active':'slide'}>{imagenActual === index&&(

                    <img   src={img} alt='imagen'/>
                )}

                </div>
                )       
                })
            }
            <button onClick={siguienteImagen} className="carrucel-main-btn-r">→</button>
        </div>
    )
}

export default Slider;