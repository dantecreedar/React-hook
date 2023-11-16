import { useEffect, useState } from "react"
import Foo from "./Foo"
import Navi from "./Navi"

function Cronometro() {
    const [reloj, setReloj] = useState(0)

    /* hook useeffect */
    useEffect(()=>{
        setTimeout(()=>{
            setReloj((reloj)=> reloj + 1  )
        }, 1000)
    })

    return <h1>Cronometro: {reloj} </h1>
}

function Activo() {
    return <h2> Activo!</h2>
}

function Desactivo() {
    return <h2> Desactivo!</h2>
}

function Mostrar(estado) {

    let estadoTotal = estado

    if (estadoTotal) {
        return <Activo/>
    }

    return <Desactivo />
}


const Menu = () => {
  return(
    <>  
        <Navi/>
        <main>
            <Cronometro/>
            <Mostrar estado= {false}/>
        </main>
        <Foo/>
    </>
  )
}

export default Menu
