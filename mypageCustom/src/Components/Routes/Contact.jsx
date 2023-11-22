import { useState } from "react";




function Contact() {
let [e, setE] = useState("Estos son los datos a Modificar...!")

const mostrar = () => {
   setE("Datos nuevo!")
  }

    return ( 
        <>
            <div>
                <h3 className="p-5">Soy el Contacto</h3>

                <div className="h-56 shadow-md">
                    <h1 className="text-2xl p-5"> {e} </h1>
                </div>
              
                <button className="p-3 m-5" onClick={mostrar}> Click me </button>
            </div>
        </>
     );
}

export default Contact;