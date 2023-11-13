import { useState } from "react";
import Principal2 from "./principal2"

function Mostrar({info}) {
    return <h4> {info} </h4>
}
function Desplazar() {

    const [mostrar, setMostrar] = useState("Estoy Activo")
    
    return <h3 style={{margin: "10px"}} onMouseMove={()=>{
        setMostrar("Estoy desactivo!")
    }}
    onClick={()=>{
        setMostrar("Activo")
    }}
    > {mostrar} </h3>
}
function Like() {
    const [likes, setLikes] = useState(0);
    console.log(useState())
    return <button style={{margin:"5px"}} onClick={()=> {
        setLikes(likes + 1);
    }}> {likes} - Click ¡ME! </button>;
}


const Principal = () => {

    let txt = "Esta es la Seleccion Correspondiente";

  return(
    <>
        <div className="card">
            <h3 style={{background: "blue", color: "white"}}>Principal</h3>
            <Principal2/>
            <Mostrar info={txt}/>
            <div style={{display: "flex", justifyContent: "center", padding: "20px"}}>
                <Desplazar/>
                <Like/>
            </div>
        </div>
    </>
  )
}

export default Principal