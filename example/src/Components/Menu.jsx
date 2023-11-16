import { useState } from "react"
import Foo from "./Foo"
import Navi from "./Navi"
import { useEffect } from "react"

function Contar() {
    const [reloj, setReloj] = useState(0)

    useEffect(()=>{
        setTimeout(() => {
            setReloj((reloj) => reloj + 1 )
        }, 1000);
    })

    return <h1> Cronometro: {reloj} </h1>
}


function Mostrar() {
    return <h1>Mostrar</h1>
}
const Menu = () => {
  return(
    <>
        <Navi/>
        <main>
            <h1 style={{margin: "20px"}}>Este es React</h1>
            <Contar/>
        </main>
        <Foo/>
    </>
  )
}

export default Menu
