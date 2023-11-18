import Navi from "./Navi"
import Info from "./Info"
import { useEffect, useState } from "react";


function Cronometro({reloj}) {
    // eslint-disable-next-line no-undef
    return <h1> {reloj} </h1>
}

function Respuesta1() {
    return <h2>Activo!</h2>
}

function Respuesta2() {
    return <h2>Desactivo!</h2>
}

function Resultado({estado}) {
    const Finalres = estado;
    if (Finalres) {
        return <Respuesta1/>
    }

    return <Respuesta2/>
}

function Menu() {

    const [reloj, setReloj] = useState(0)

    useEffect(() =>{
        setTimeout(() =>{
            setReloj((reloj)=> reloj + 1)
        }, 1000)
    })

    return ( 
        <>
            <Navi/>
            <main>
                <Cronometro reloj={reloj} />
                <Resultado estado={false} />
            </main>
            <Info/>
        </>
     );
}

export default Menu;
<>
    <h1>Menu</h1>
</>