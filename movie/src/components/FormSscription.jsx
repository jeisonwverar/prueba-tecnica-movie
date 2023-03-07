

const  FormSuscription=()=>{


    return(
        <form action="" className="form">
            <h2>LA HISTORIA CONTINÚA...</h2>
            <p>Suscríbete y entérate de lanzamientos exclusivos, nuevas colecciones y descuentos especiales</p>
            <div>
                <label htmlFor="name">Nombres y Apellidos</label>
                <input type="text" id="name" />
            </div>
            <div>
                <label htmlFor="email">Correo electrónico</label>
                <input type="email" id="email" />
            </div>
            <div>
                <label htmlFor="cel">Celular</label>
                <input type="text" id="cel" />
            </div>
            <div>
                <label htmlFor="identification">
Número de documento
</label>
                <input type="text" id="identification" />
            </div>
            <div>
                <p>Te interesa productos para</p>
                <input type="checkbox" id="genderf" />
                <label htmlFor="genderf">Mujer</label>
                <input type="checkbox" id="genderm" />
                <label htmlFor="genderm">Hombre</label>
            </div>
            <div>
                <label htmlFor="">
                <input type="checkbox" name="" id="" />
Aceptas Tratamiento de Datos Personales y Términos y Condiciones</label>
            </div>
            <button>SUSCRIBIRME</button>
        </form>
    )
};

export default FormSuscription;