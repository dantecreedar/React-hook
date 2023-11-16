import { useState, useEffect } from "react"

function Contador() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setContador((contador)=> contador + 1)
    }, 1000);
  })
  

  return <h1> La cueta se activa...{contador} </h1>
}

const Main = () => {
  return(
    <>
        <main>
            <h1 style={{margin:"10px"}}>FUNCIONES!</h1>
            <Contador/>
        </main>
    </>
  )
}

export default Main