import { useState } from "react"

const Mostrar = () => {
  // eslint-disable-next-line no-undef
  return <h1  className="bg-red-400 p-5"> {estado} </h1>
}



function Blogs() {

 
    
    

    const txt = "Este es un Simple cambio!" 
  return (
    <div>
        <h3 className="bg-white shadow-lg m-5 p-3"> {txt} </h3>
        <div className="shadow-2xl m-5 p-5">
            <h3>Estos son los Datos: <span> <Mostrar/> </span> </h3>
        </div>
        <button onClick={()=>{

            setEstado("Mostrar");


        }} className="bg-blue-300 m-5 p-2">Click</button>
    </div>
  )
}

export default Blogs
